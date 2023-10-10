import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import styles from './styleRegister';
import { SafeAreaView } from 'react-navigation';
import { Stack, useRouter } from 'expo-router';
import Nextbutton from '../../components/button/Next';
import CheckButton from '../../components/button/Check';

export default function Bravo({ navigation }) {
    const [isCheckButtonChecked, setIsCheckButtonChecked] = useState(false);

    const handleNext = () => {
        navigation.navigate('Profile');
    };

    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />
            </View>

            <Text style={styles.textTitle}>Bravo ! </Text>


            <Text style={styles.textBravo}>
                Tu as terminé ton inscription. {"\n\n"}
                Tu peux dès maintenant utiliser <Text style={styles.redText}>Kiess</Text>, mais nous ne savons rien sur toi, ton matchmaking peut en prendre un coup. {"\n\n"}
                Nous te conseillons fortement de remplir un <Text style={styles.redText}>maximum d’informations</Text> pour profiter au maximum de l’expérience. {"\n\n"}

                Voici quelques conseils avant d’utiliser Kiess: {"\n\n"}

                <Text style={styles.redText}>1 - Sois toi-même {"\n\n"}</Text>
                <Text style={styles.redText}>2 - Tes informations sont précieuses {"\n\n"}</Text>
                <Text style={styles.redText}>3 - Sois respectueux(se) et bienveillant(e)</Text>

            </Text>


            <Nextbutton
                title="Completer mon profil"
                onPress={handleNext}
            />


        </SafeAreaView>
    );
}
