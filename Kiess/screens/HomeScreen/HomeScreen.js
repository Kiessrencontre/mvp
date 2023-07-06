// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue sur l'écran d'accueil !</Text>
      <Button
        title="Aller au profil"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
