import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Setting({ navigation }) {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          {/* Replace with your actual logo and avatar image paths */}
          <Image source={{ uri: 'URL_OF_THE_KVESS_LOGO' }} style={styles.logo} />
          <TouchableOpacity onPress={() => handleNavigation('JulietteSettings')}>
            <Image source={{ uri: 'URL_OF_THE_JULIETTE_IMAGE' }} style={styles.avatar} />
          </TouchableOpacity>
        </View>

        {[
          { name: 'Vous', screen: 'PersonalInfo' },
          { name: 'Découverte', screen: 'Discovery' },
          { name: 'Ami & famille', screen: 'FamilyFriends' },
          { name: 'Notifications', screen: 'NotificationsSetting' },
          { name: 'Restaurer mes achats', screen: 'RestorePurchases' },
          { name: 'Contact', screen: 'Contact' },
          { name: 'Communauté', screen: 'Community' },
          { name: 'Confidentialité', screen: 'Privacy' },
          { name: 'Mentions légales', screen: 'LegalMentions' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.button} onPress={() => handleNavigation(item.screen)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.logoutButton}>
          <Text>Se déconnecter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton}>
          <Text>Supprimer mon compte</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer with app version */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>KVESS version 02.230920200</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 0, // Remove bottom padding
  },
  logo: {
    width: 80, // Adjust to match your logo size
    height: 30, // Adjust to match your logo size
  },
  avatar: {
    width: 40, // Adjust to match your avatar size
    height: 40, // Adjust to match your avatar size
  },
  button: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logoutButton: {
    padding: 20,
    backgroundColor: '#ff0000',
    marginTop: 20,
  },
  deleteButton: {
    padding: 20,
    backgroundColor: '#ff0000',
    marginTop: 10,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
    fontSize: 12,
  },
});
