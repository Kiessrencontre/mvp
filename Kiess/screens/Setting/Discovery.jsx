import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; 

export default function Discovery() {
  const [isDiscoverable, setDiscoverable] = useState(true);
  const [isInvisibleMode, setInvisibleMode] = useState(false);
  const [ageRange, setAgeRange] = useState([22, 30]);
  const [distance, setDistance] = useState(30);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Découverte</Text>
        <Switch
          value={isDiscoverable}
          onValueChange={(value) => setDiscoverable(value)}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Mode invisible</Text>
        <Switch
          value={isInvisibleMode}
          onValueChange={(value) => setInvisibleMode(value)}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Âge</Text>
        <Text style={styles.rangeText}>{`${ageRange[0]} - ${ageRange[1]} ans`}</Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={18}
        maximumValue={50}
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="#000000"
        step={1}
        values={ageRange}
        onValueChange={(values) => setAgeRange(values)}
      />

      <View style={styles.row}>
        <Text style={styles.label}>Distance</Text>
        <Text style={styles.rangeText}>{`${distance} km`}</Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="#000000"
        step={1}
        value={distance}
        onValueChange={(value) => setDistance(value)}
      />

      <View style={styles.row}>
        <Text style={styles.label}>Afficher mon profil</Text>
        <Switch
          value={showProfile}
          onValueChange={(value) => setShowProfile(value)}
        />
      </View>

      {/* Liste des éléments ici */}
      {/* Utilisez TouchableOpacity pour chaque élément de liste comme ci-dessous */}
      <TouchableOpacity style={styles.listItem}>
        <Text style={styles.label}>Ami & famille</Text>
        {/* Ajoutez une icône de flèche ici si nécessaire */}
      </TouchableOpacity>

      {/* Répétez le TouchableOpacity pour les autres éléments de la liste */}
      {/* ... */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  rangeText: {
    fontSize: 16,
    color: '#888',
  },
  listItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  // Ajoutez d'autres styles si nécessaire
});
