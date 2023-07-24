import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styleRegister';
import { SafeAreaView } from 'react-navigation';
import { Stack, useRouter } from 'expo-router';
import Nextbutton from '../../components/Nextbutton';
import CheckButton from '../../components/CheckButton';

export default function PhoneNumber({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValidationCode, setIsValidationCode] = useState(false);

  const handlePhoneNumberChange = (number) => {
    setPhoneNumber(number);
  };

  const handleValidation = () => {
    if (phoneNumber.trim() !== '') {
      setIsSubmitting(true);
      // Vous pouvez ajouter ici votre logique de validation via code
      setTimeout(() => {
        setIsSubmitting(false);
        setPhoneNumber('');
        setIsValidationCode(true);
      }, 2000);
    }
  };

  const handleNext = () => {
    if (isValidationCode) {
      navigation.navigate('BlockMatch');
    } else {
      handleValidation();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />
      </View>

      <Text style={styles.textTitle}>
        {isValidationCode ? 'Validation via le code' : 'Votre numéro de téléphone'}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Numéro de téléphone"
        placeholderTextColor="#AAAAAA"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
      />

      {isSubmitting ? (
        <Text style={styles.validationText}>Validation en cours...</Text>
      ) : (
        <Text style={styles.validationText}>{phoneNumber ? 'Valider' : ''}</Text>
      )}

      <Nextbutton onPress={handleNext} />

    </SafeAreaView>
  );
}
