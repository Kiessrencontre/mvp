import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import styles from './styleRegister';
import { SafeAreaView } from 'react-navigation';
import { Stack, useRouter } from 'expo-router';
import Nextbutton from '../../components/Nextbutton';
import * as ImagePicker from 'expo-image-picker';

export default function ProfilPicture({ navigation }) {
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        // Demander la permission d'accéder à la galerie de photos
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                // Gérer le cas où la permission est refusée
            }
        })();
    }, []);

    const handleChooseProfilePicture = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.canceled) {
                const selectedImage = result.assets[0];
                setProfilePicture(selectedImage.uri);
            }
        } catch (error) {
            // Gérer les erreurs
        }
    };

    const handleNext = () => {
        // Traiter l'image sélectionnée (par exemple, l'enregistrer sur le serveur)
        // Et naviguer vers la page suivante
        navigation.navigate('Bravo');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />
            </View>

            <Text style={styles.textTitle}>Choisis ta photo de profil</Text>

            {profilePicture ? (
                <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
            ) : (
                <View style={styles.placeholder}>
                    <Text style={styles.placeholderText}>Aucune photo sélectionnée</Text>
                </View>
            )}

            <TouchableOpacity style={styles.chooseButton} onPress={handleChooseProfilePicture}>
                <Text style={styles.chooseButtonText}>Choisir une photo</Text>
            </TouchableOpacity>

            <Nextbutton disabled={!profilePicture} onPress={handleNext} />
        </SafeAreaView>
    );
}
