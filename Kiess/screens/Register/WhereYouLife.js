import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import styles from './styleRegister';
import { SafeAreaView } from 'react-navigation';
import { Stack, useRouter } from 'expo-router';
import Nextbutton from '../../components/Nextbutton';

export default function WhereYouLife({ navigation }) {
  const [city, setCity] = useState('');

  const handleCityChange = (text) => {
    setCity(text);
  };

  const handleNext = () => {
    if (city.trim() !== '') {
      navigation.navigate('Password');
    } else {
      // Affiche un message d'erreur ou effectue d'autres actions si nécessaire
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />
      </View>

      <Text style={styles.textTitle}>Tu vis à</Text>

      <TextInput
        style={styles.input}
        placeholder="Ville"
        placeholderTextColor="#AAAAAA"
        value={city}
        onChangeText={handleCityChange}
      />

      <Nextbutton disabled={city.trim() === ''} onPress={handleNext} />
    </SafeAreaView>
  );
}
