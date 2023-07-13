import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import styles from './block1';
import { SafeAreaView } from 'react-navigation';
import { Stack, useRouter } from 'expo-router';
import Nextbutton from '../../components/Nextbutton';
import CheckButton from '../../components/CheckButton';

export default function WelcomeKiess({ navigation }) {
    const [isCheckButtonChecked, setIsCheckButtonChecked] = useState(false);

    const handleNext = () => {
        if (isCheckButtonChecked) {
          navigation.navigate('Home');
        }
      };

    return (
        <SafeAreaView style={styles.container}>
            
                <View>
                    <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />
                </View>

                <Text style={styles.textTitle}>Bienvenue sur <Text style={styles.redText}>Kiess,</Text></Text>


                <View>
                    <Text style={styles.text}>Nous allons créer ensemble ton profil.</Text>
                    <Text style={styles.text}>Notre système de matchmaking, utilise un puissant algorythme qui compare tes informations à celles d’une autres personnes.</Text>
                    <Text style={styles.text}>Plus ton profil sera complet, plus le système te connectera avec des profils correspondant aux matchmaking choisis.</Text>
                    <Text style={styles.text}>Plus ton profil sera complet, plus le système vous connectera avec des profils correspondant aux matchmaking choisis.</Text>

                </View>

                <CheckButton
                isChecked={isCheckButtonChecked}
                onCheck={setIsCheckButtonChecked}/>

                <Nextbutton
                    onPress={handleNext}
                    disabled={!isCheckButtonChecked}

                />
           

        </SafeAreaView>
    );
}
