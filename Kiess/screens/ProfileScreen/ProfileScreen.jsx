import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import MenuKiess from '../../components/MenuKiess';

export default function ProfileScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('home'); // Définir le tab actif par défaut

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>C'est l'écran de profil !</Text>

      <Text>Profil Kiess</Text>
      <Button title="Retour à l'accueil" onPress={() => navigation.navigate('Home')} />

      <MenuKiess
          activeTab={activeTab}
        onChangeTab={handleTabChange}
      />
    </View>
  );
}
