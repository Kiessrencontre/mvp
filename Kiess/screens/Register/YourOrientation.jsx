import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styleRegister';
import { SafeAreaView } from 'react-navigation';
import { Stack, useRouter } from 'expo-router';
import Nextbutton from '../../components/button/Next';
import Sexebutton from '../../components/button/Sexe';

export default function YouOrientation({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const options = ['Hétéro', 'Gay', 'Lesbienne', 'Bisexuel(le)', 'Asexuel(le)', 'Demisexuel(le)', 'Pansuel(le)', 'Queer', 'Je me questionne'];
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (selectedOption !== '') {
            navigation.navigate('BirthDay');
        } else {
            // Affiche un message d'erreur ou effectue d'autres actions si nécessaire
        }
    };

    return (
        <View>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View>
                        <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />
                    </View>

                    <Text style={styles.textTitle}>Tu orientation sexuelle ?</Text>

                    {options.map((option, index) => (
                        <Sexebutton
                            key={index}
                            onPress={() => handleOptionSelect(option)}
                            title={option}
                            buttonStyle={styles.optionButton}
                            textStyle={styles.optionButtonText}
                            isSelected={option === selectedOption}
                        />
                    ))}

                    <Nextbutton disabled={firstName.trim() === ''} onPress={handleNext} />
                </SafeAreaView>
            </ScrollView>
            
        </View>

    );
}
