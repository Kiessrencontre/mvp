import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import tw from "twrnc";
import IconBack from '../../components/IconBack';
import IconFront from '../../components/IconFront';
import KiessSP from'../../assets/Boutique/SuperPieces.png';


export default function SuperCoin({ navigation }) {
  return (
    <View  style={tw`flex-1 items-center justify-center bg-purple-500 `}>
      <View style={tw`rounded-lg items-center justify-center h-159 w-88 bg-blue-300 bg-opacity-30`} >

      <View style={tw`flex-row w-full items-center justify-center `}>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('ShopPreniumPlus')}><IconBack/></TouchableOpacity>
        </View>

        <View style={tw` mx-15 `}>
        <Image source={KiessSP} style={{ width: 132, height: 94}} resizeMode="contain" />
        </View>

        <View>
        <TouchableOpacity
        onPress={() => navigation.navigate('SuperCoin2')}><IconFront/></TouchableOpacity>
        </View>
          
        
      </View>
      
      
      <Text style={tw `text-2xl text-white`}>3,99€/mois</Text>
      <Text style={tw `text-xs text-white`} >Abonnement sans engagement</Text>

      <TouchableOpacity style={tw`bg-amber-50 h-8 rounded-full w-32 items-center justify-center mt-8`}>
        <Text style={tw `text-base text-rose-500 font-bold`}>S'abonner</Text>
      </TouchableOpacity>

      </View>

    </View>
  );
}

