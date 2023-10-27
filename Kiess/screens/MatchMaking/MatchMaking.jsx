import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const MatchMaking = () => {
  const matchmakingOptions = [
    { imageUrl: 'URL_OF_FIRST_IMAGE', label: "L'amour rend aveugle", tag: 'TENDANCE' },
    { imageUrl: 'URL_OF_SECOND_IMAGE', label: 'Jeu de carte multijoueur', tag: 'TENDANCE' },
    { imageUrl: 'URL_OF_THIRD_IMAGE', label: 'Fans des JO PARIS 2024', tag: 'TEMPORAIRE / SPEED CHATING' },
    { imageUrl: 'URL_OF_FOURTH_IMAGE', label: 'Discussion de groupe', tag: 'CLASSIQUE' },
    { imageUrl: 'URL_OF_FIFTH_IMAGE', label: 'La HOT ROOM', tag: 'UNIQUEMENT DE 22H00 À 05H00' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: 'URL_OF_THE_KVESS_LOGO'}} style={styles.logo}/>
        <Image source={{uri: 'URL_OF_THE_PROFILE_IMAGE'}} style={styles.avatar}/>
      </View>

      <Text style={styles.title}>Matchmaking</Text>

      <ScrollView>
        {matchmakingOptions.map((item, index) => (
          <View key={index} style={styles.optionContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.optionImage} />
            <Text style={styles.tag}>{item.tag}</Text>
            <Text style={styles.optionLabel}>{item.label}</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text>Commencer</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        {/* Icons can be placed here as needed */}
      </View>
    </View>
  );
};

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
    backgroundColor: '#e0e0e0',
  },
  logo: {
    width: 50,
    height: 50,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
  },
  optionContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  optionImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  tag: {
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  optionLabel: {
    marginTop: 10,
    fontSize: 18,
  },
  startButton: {
    padding: 10,
    backgroundColor: '#ff0000',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});

export default MatchMaking;
