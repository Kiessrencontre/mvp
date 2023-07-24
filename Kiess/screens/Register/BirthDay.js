import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import styles from './styleRegister';
import { SafeAreaView } from 'react-navigation';
import { Stack, useRouter } from 'expo-router';
import Nextbutton from '../../components/Nextbutton';

export default function Birthday({ navigation }) {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const handleDateOfBirthChange = (text) => {
    setDateOfBirth(text);
  };

  const handleNext = () => {
    if (dateOfBirth.trim() !== '') {
      navigation.navigate('WhereYouLife');
    } else {
      // Affiche un message d'erreur ou effectue d'autres actions si nécessaire
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />
      </View>

      <Text style={styles.textTitle}>Ta date de naissance</Text>

      <TextInput
        style={styles.input}
        placeholder="JJ/MM/AAAA"
        placeholderTextColor="#AAAAAA"
        value={dateOfBirth}
        onChangeText={handleDateOfBirthChange}
        keyboardType="numeric"
        maxLength={10}
      />
      <Text>Vous devez avoir 18 ans mininum.</Text>


      <Nextbutton disabled={dateOfBirth.trim() === ''} onPress={handleNext} />
    </SafeAreaView>
  );
}
