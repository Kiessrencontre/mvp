import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import BlindMatch from"../../assets/Matchmaking/BlindMatch.png"
import Uno from"../../assets/Matchmaking/UNO.png"
import Jo from"../../assets/Matchmaking/JO.png"
import GroupeDiscussion from"../../assets/Matchmaking/GroupeDiscussion.png"
import HotRoom from"../../assets/Matchmaking/HotRoom.png"

const MatchMaking = ({navigation}) => {
  const matchmakingOptions = [
    { image: BlindMatch, label: "L'amour rend aveugle", tag: 'TENDANCE',screenName: 'BlindMatchScreen' },
    // { image: BlindMatch, label: "L'amour rend aveugle", tag: 'TENDANCE',screenName: 'ProfilCard' },
    { image: Uno, label: 'Jeu de carte multijoueur', tag: 'TENDANCE' },
    { image: Jo, label: 'Fans des JO PARIS 2024', tag: 'TEMPORAIRE / SPEED CHATING' },
    { image: GroupeDiscussion, label: 'Discussion de groupe', tag: 'CLASSIQUE' },
    { image: HotRoom, label: 'La HOT ROOM', tag: 'UNIQUEMENT DE 22H00 À 05H00' },
  ];

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Image source={{uri: 'URL_OF_THE_KVESS_LOGO'}} style={styles.logo}/>
        <Image source={{uri: 'URL_OF_THE_PROFILE_IMAGE'}} style={styles.avatar}/>
      </View> */}

      <Text style={styles.title}>Matchmaking</Text>

      <ScrollView>
        {matchmakingOptions.map((item, index) => (
          <View key={index} style={styles.optionContainer}>
            <Image source={item.image} style={styles.optionImage} />
            <Text style={styles.tag}>{item.tag}</Text>
            <Text style={styles.optionLabel}>{item.label}</Text>
            <TouchableOpacity style={styles.startButton}
            onPress={()=> navigation.navigate(item.screenName)}
            >
              <Text>Commencer</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      
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
