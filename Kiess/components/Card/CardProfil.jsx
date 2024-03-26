import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import tw from "twrnc";

import { SvgUri } from "react-native-svg";

const image = require("../../assets/fondProfil.jpeg");
// import JardinageBadge from '../../assets/Badges/Jardinage.svg';

// Supposons que ceci est votre tableau de badges
const badges = [
  {
    id: 1,
    icon: require("../../assets/Badges/Jardinage.png"),
    label: "Badge 1",
  },
  {
    id: 2,
    icon: require("../../assets/Badges/Aubergine.png"),
    label: "Badge 2",
  },
  {
    id: 3,
    icon: require("../../assets/Badges/Concombre.png"),
    label: "Badge 3",
  },
  {
    id: 4,
    icon: require("../../assets/Badges/JeudePapier.png"),
    label: "Badge 4",
  },
  {
    id: 5,
    icon: require("../../assets/Badges/Jardinage.png"),
    label: "Badge 5",
  },
  {
    id: 6,
    icon: require("../../assets/Badges/Graffiti.png"),
    label: "Badge 6",
  },
  {
    id: 1,
    icon: require("../../assets/Badges/Jardinage.png"),
    label: "Badge 1",
  },
  {
    id: 2,
    icon: require("../../assets/Badges/Aubergine.png"),
    label: "Badge 2",
  },
  {
    id: 3,
    icon: require("../../assets/Badges/Concombre.png"),
    label: "Badge 3",
  },
  {
    id: 4,
    icon: require("../../assets/Badges/JeudePapier.png"),
    label: "Badge 4",
  },
  {
    id: 5,
    icon: require("../../assets/Badges/Jardinage.png"),
    label: "Badge 5",
  },
  {
    id: 6,
    icon: require("../../assets/Badges/Graffiti.png"),
    label: "Badge 6",
  },
];

export default function CardP() {
  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <View style={tw`flex-row items-center justify-between`}></View>
      <View style={tw`mt-4 p-4 bg-white rounded-lg shadow-md`}>
        <View style={tw`flex-row items-center justify-between mt-4 p-4`}>
          <View style={tw``}>
            <Text style={tw`text-2xl font-bold`}>Lisouille</Text>
            <Text style={tw`text-sm text-gray-500`}>20 ans | Lyon</Text>
          </View>

          <View style={tw`flex-nowrap items-end justify-between`}>
            <Text style={tw`text-3xl font-bold text-red-500`}>80%</Text>
            <Text style={tw`text-xs`}>de taux de compatibilité</Text>
          </View>
        </View>

        <View style={tw`p-4`}>
          <View style={tw`bg-gray-300 h-px`} />
        </View>

        <View style={tw`p-4`}>
          <Text style={tw`font-semibold`}>SA PHRASE D'ACCROCHE</Text>
          <Text style={tw`text-sm`}>
            Ici pour rencontrer une personne cool, ouverte et qui n'a pas peur
            de se lancer
          </Text>
        </View>

        <View style={tw` p-4`}>
          <Text style={tw`font-semibold`}>SON AUDIO MATCH</Text>
          <View style={tw`w-full bg-gray-200 rounded-full h-3 mt-2`}>
            <View
              style={tw`bg-purple-600 h-3 rounded-full`} /* You will need to set the width dynamically based on the audio match percentage */
            ></View>
          </View>
        </View>

        <View style={tw`mt-2 p-4 `}>
          <Text style={tw`font-semibold`}>SES BADGES (30)</Text>
          <View style={tw` mt-2 bg-white rounded-lg shadow-md`}>
            <View style={tw`flex-row flex-wrap justify-center`}>
              {badges.slice(0, 6).map(
                (
                  badge // Affiche les 6 premiers badges
                ) => (
                  <View key={badge.id} style={tw`mx-1 my-2`}>
                    <TouchableOpacity style={tw`items-center`}>
                      <Image source={badge.icon} style={tw`w-8 h-8`} />
                    </TouchableOpacity>
                  </View>
                )
              )}
            </View>
            <View style={tw`flex-row flex-wrap justify-center`}>
              {badges.slice(6, 12).map(
                (
                  badge // Affiche les badges de 7 à 12
                ) => (
                  <View key={badge.id} style={tw`mx-1 mb-2`}>
                    <TouchableOpacity style={tw`items-center`}>
                      <Image source={badge.icon} style={tw`w-8 h-8`} />
                    </TouchableOpacity>
                  </View>
                )
              )}
            </View>
          </View>
        </View>
      </View>

      <View style={tw`flex-row justify-between mt-4`}>
        <TouchableOpacity style={tw`py-2 px-4 bg-gray-200 rounded-full`}>
          <Text>NON MERCI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`py-2 px-4 bg-red-500 rounded-full`}>
          <Text style={tw`text-white`}>JE MATCH</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
