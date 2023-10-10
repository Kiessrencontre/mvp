import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styleRegister';
import { SafeAreaView } from 'react-navigation';
import { Stack, useRouter } from 'expo-router';
import Nextbutton from '../../components/button/Next';
import CheckButton from '../../components/button/Check';

export default function Mail({ navigation }) {
  const [email, setEmail] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const validateEmail = () => {
    // Vous pouvez ajouter ici votre logique de validation d'adresse e-mail
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailRegex.test(email)) {
      navigation.navigate('FirstName'); // Redirige directement vers la page suivante lorsque l'e-mail est valide
    } else {
      // Affiche un message d'erreur ou effectue d'autres actions si nécessaire
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />
      </View>

      <Text style={styles.textTitle}>Ton adresse mail</Text>

      <TextInput
        style={styles.input}
        placeholder="Adresse mail"
        placeholderTextColor="#AAAAAA"
        value={email}
        onChangeText={handleEmailChange}
      />

      <CheckButton onPress={validateEmail} />

      <Nextbutton disabled={!email} onPress={validateEmail} />
    </SafeAreaView>
  );
}
