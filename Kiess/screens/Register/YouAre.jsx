import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import styles from './styleRegister';
import { SafeAreaView } from 'react-navigation';
import { Stack, useRouter } from 'expo-router';
import Nextbutton from '../../components/button/Next';
import Sexebutton from '../../components/button/Sexe';

export default function YouAre({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const options = ['un homme', 'une femme', 'non binaire', 'autre'];
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption !== '') {
      navigation.navigate('YouOrientation');
    } else {
      // Affiche un message d'erreur ou effectue d'autres actions si nécessaire
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />
      </View>

      <Text style={styles.textTitle}>Tu es...</Text>

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
  );
}
