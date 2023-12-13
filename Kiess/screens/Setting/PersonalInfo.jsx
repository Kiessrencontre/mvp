import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';





export default function PersonalInfo({ navigation }) {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };
  const userData = {
    pseudo: 'Luciette',
    nom: 'Martin',
    prenom: 'Lucie',
    dateDeNaissance: '17/08/2002',
    ville: 'Lyon',
    interessePar: 'Homme',
  };
  return (
    <ScrollView style={styles.container}>
      {/* En-tête avec logo et avatar */}
      <View style={styles.header}>
        {/* Remplacez par les chemins d'accès réels de vos images */}
        <Image source={{ uri: 'URL_OF_THE_KVESS_LOGO' }} style={styles.logo} />
        <TouchableOpacity onPress={() => handleNavigation('JulietteSettings')}>
          <Image source={{ uri: 'URL_OF_THE_JULIETTE_IMAGE' }} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      
      {/* Informations de l'utilisateur */}
      <View style={styles.infoContainer}>
        <InfoRow label="Pseudo" value={userData.pseudo} />
        <InfoRow label="Nom" value={userData.nom} />
        <InfoRow label="Prénom" value={userData.prenom} />
        <InfoRow label="Date de naissance" value={userData.dateDeNaissance} />
        <InfoRow label="Ville" value={userData.ville} />
        <InfoRow label="Intéressé par" value={userData.interessePar} />
      </View>

      {/* Pied de page avec version de l'application */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>KVESS version 02.230920200</Text>
      </View>
    </ScrollView>
  );
}
function InfoRow({ label, value }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
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

  
  infoContainer: {
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
});
