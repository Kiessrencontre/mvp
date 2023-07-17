import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import styles from './block1';
import { SafeAreaView } from 'react-navigation';
import { Stack, useRouter } from 'expo-router';
import Nextbutton from '../../components/Nextbutton';

export default function FirstName({ navigation }) {
  const [firstName, setFirstName] = useState('');

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleNext = () => {
    if (firstName.trim() !== '') {
      navigation.navigate('Profile');
    } else {
      // Affiche un message d'erreur ou effectue d'autres actions si nécessaire
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />
      </View>

      <Text style={styles.textTitle}>Ton prénom</Text>

      <TextInput
        style={styles.input}
        placeholder="Prénom"
        placeholderTextColor="#AAAAAA"
        value={firstName}
        onChangeText={handleFirstNameChange}
      />

      <Nextbutton disabled={firstName.trim() === ''} onPress={handleNext} />
    </SafeAreaView>
  );
}
