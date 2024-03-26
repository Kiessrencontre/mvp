import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import tw from "twrnc";
import CustomTopBarDiscover from './CustomTopBarDiscover';

const backgroundImage = require("../../assets/Minuit_young_woman.png");
// Supposons que c'est votre liste de badges


const initialBadges = new Array(16).fill(null).map((_, index) => ({
  id: index,
  icon: require('../../assets/badge-heart.png'),
  isRemoved: false,
}));



export default function Discover({ route, navigation }) {
  const [badges, setBadges] = useState(initialBadges);
  const [points, setPoints] = useState(120);
  const [name, setName] = useState('Julia')
  const [profesion, setProfesion] = useState('Étudiante')
  const [age, setAge] = useState(22)
  const [ville, setVille] = useState('Lyon')
  const [zipCode, setZipCode] = useState(69)


  const removeBadge = (badgeId) => {
    if (points >= 20) {
      const updatedBadges = badges.map(badge => {
        if (badge.id === badgeId) {
          return { ...badge, isRemoved: true };
        }
        return badge;
      });
      setBadges(updatedBadges);
      setPoints(prevPoints => prevPoints - 20);
    } else {
      alert("Vous n'avez pas assez de points !");
    }
  };
  
  // Créer deux lignes de badges
  const badgeRows = Array.from({ length: Math.ceil(badges.length / 4) }, (_, i) =>
    badges.slice(i * 4, (i + 1) * 4)
  );

  return (
    <View style={tw`flex-1 bg-white`}>
      <CustomTopBarDiscover navigation={navigation} 
       />
    <View style={tw`items-center pt-4`}>
      <Text style={tw`text-2xl font-bold `}>{name}</Text>
      <Text style={tw`text-sm text-gray-500 `}>{profesion} ({age} ans)</Text>
      <Text style={tw`text-sm text-gray-500 `}>
         {ville} ({zipCode})
      </Text>
    </View>
      <View style={tw`flex-1 items-center justify-center bg-white `}>
        {/* Container pour les badges avec une taille spécifique */}
          <ImageBackground source={backgroundImage} style={tw`w-80 h-80 `}>
        <View style={tw`flex-wrap flex-row justify-center `}>
        {badges.map((badge) => (
          <TouchableOpacity
            key={badge.id}
            onPress={() => removeBadge(badge.id)}
            style={tw.style('w-20 h-20', badge.isRemoved)}
            disabled={badge.isRemoved}
          >
            {!badge.isRemoved && (
              <Image source={badge.icon} style={tw`w-20 h-20`} />
            )}
          </TouchableOpacity>
        ))}
      </View>
          </ImageBackground>
      </View>

      {/* Votre barre inférieure avec les statistiques, etc. */}
      <View style={tw`flex-row justify-evenly mb-8`}>
        <View style={tw`items-center`}>
          <Text style={tw`text-lg text-blue-500`}>145</Text>
          <Text style={tw`text-xs text-gray-500`}>MESSAGES</Text>
        </View>
        <View style={tw`items-center`}>
          <Text style={tw`text-lg text-yellow-500`}>{points}</Text>
          <Text style={tw`text-xs text-gray-500`}>POINTS</Text>
        </View>
        <View style={tw`items-center`}>
          <Text style={tw`text-lg text-red-500`}>0</Text>
          <Text style={tw`text-xs text-gray-500`}>SUPER PIÈCES</Text>
        </View>
      </View>
    </View>
  );
}
