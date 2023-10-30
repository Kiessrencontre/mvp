import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Jo from "../../../assets/Matchmaking/BlindMatchSearch.png";

function BlindMatch({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={()=> navigation.navigate("BlindChoise")}
      >

      <Image source={Jo} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

export default BlindMatch;

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
