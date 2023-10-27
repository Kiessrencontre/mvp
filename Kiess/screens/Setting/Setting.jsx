import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Setting ({ navigation }){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: 'URL_OF_THE_KVESS_LOGO'}} style={styles.logo}/>
        <Image source={{uri: 'URL_OF_THE_JULIETTE_IMAGE'}} style={styles.avatar}/>
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text>Configurer Juliette</Text>
      </TouchableOpacity>

      {['Vous', 'Decouverte', 'Ami & famille', 'Notifications', 'Restaurer mes achats', 'Contact', 'Communauté', 'Confidentialité','mentions légales'].map((item, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
      
      <TouchableOpacity style={styles.logoutButton}>
        <Text>Se deconnecter</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.deleteButton}>
        <Text>Supprimer mon compte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  button: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logoutButton: {
    padding: 10,
    backgroundColor: '#ff0000',
    marginTop: 20,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: '#ff0000',
    marginTop: 10,
  },
});

