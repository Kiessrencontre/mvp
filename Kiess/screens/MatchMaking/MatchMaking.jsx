import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import BlindMatch from"../../assets/Matchmaking/BlindMatch.png"
import OppositesAttract from"../../assets/Matchmaking/LesOppséeSattirent.png"
import Uno from"../../assets/Matchmaking/UNO.png"
import Jo from"../../assets/Matchmaking/JO.png"
import GroupeDiscussion from"../../assets/Matchmaking/GroupeDiscussion.png"
import HotRoom from"../../assets/Matchmaking/HotRoom.png"

import tw from "twrnc";


const MatchMaking = ({navigation}) => {
  const matchmakingOptions = [
    { image: BlindMatch, label: "L'amour rend aveugle", tag: 'TENDANCE',screenName: 'BlindMatchScreen' },
    { image: OppositesAttract, label: "Les opposés s'attirent", tag: 'TENDANCE',screenName: 'ProfilCard' },
    // { image: Uno, label: 'Jeu de carte multijoueur', tag: 'TENDANCE' },
    // { image: Jo, label: 'Fans des JO PARIS 2024', tag: 'TEMPORAIRE / SPEED CHATING' },
    // { image: GroupeDiscussion, label: 'Discussion de groupe', tag: 'CLASSIQUE' },
    // { image: HotRoom, label: 'La HOT ROOM', tag: 'UNIQUEMENT DE 22H00 À 05H00' },
  ];
  {/* <View style={styles.header}>
    <Image source={{uri: 'URL_OF_THE_KVESS_LOGO'}} style={styles.logo}/>
    <Image source={{uri: 'URL_OF_THE_PROFILE_IMAGE'}} style={styles.avatar}/>
  </View> */}

  return (
    <View style={tw`flex-1 bg-white`}>

  <Text style={tw`text-2xl font-bold px-5 py-5`}>Matchmaking en vedette</Text>

  <ScrollView>
    {matchmakingOptions.map((item, index) => (
      <View key={index} style={tw`mb-5 items-center`}>
        <Image source={item.image} style={tw`w-full h-44`} />
        <Text style={tw`text-white text-base font-bold px-2.5 py-1.5 absolute top-15 right-1 bg-transparent`}>{item.tag}</Text>

        <Text style={tw`text-2xl text-white font-bold mt-2.5 absolute bottom-15 right-3.5 bg-transparent`}>{item.label}</Text>

        <TouchableOpacity style={tw`py-2 bg-white px-5 absolute bottom-2.5 right-2.5 rounded-3xl`}
        onPress={()=> navigation.navigate(item.screenName)}>

          <Text style={tw`text-black text-base font-bold`}>Commencer</Text>

        </TouchableOpacity>

      </View>
    ))}
  </ScrollView>

</View>
  );
};



export default MatchMaking;
