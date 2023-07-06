// ProfileScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>C'est l'écran de profil !</Text>
      <Button
        title="Retour à l'accueil"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
