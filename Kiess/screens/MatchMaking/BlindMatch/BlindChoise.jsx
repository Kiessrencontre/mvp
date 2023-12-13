import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Jo from "../../../assets/Matchmaking/BlindMatchSearch.png";



function BlindChoise({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={Jo} style={styles.image} />
      <TouchableOpacity onPress={() => navigation.navigate("ProfilCard")}>
        <Text>Léa</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BlindChoise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',  // centers children vertically in flex containers
    alignItems: 'center',      // centers children horizontally in flex containers
  },
  image: {
    resizeMode: 'contain'  // ensures the image content fits within the given dimensions
  },
});
