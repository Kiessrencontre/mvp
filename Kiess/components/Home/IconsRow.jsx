import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import tw from "twrnc";

const IconRow = ({ icons, onIconPress, isGold }) => {
  // Définir le slot spécial si l'utilisateur est Gold
  const specialIcon = {
    image: require("../../assets/Group196.png"),
    name: "Spécial",
    point: "200",
  };

  // Ajoutez des placeholders pour s'assurer qu'il y a toujours 3 icônes (ou 4 si l'utilisateur est Gold)
  let filledIcons = ensureFourIcons(icons, isGold ? 3 : 4);

  // Ajoutez le slot spécial à la fin si l'utilisateur est Gold
  if (isGold) {
    filledIcons.push(specialIcon);
  }

  return (
    <View style={tw`flex-row justify-around mt-2`}>
      {filledIcons.map((icon, index) => (
        <View key={index} style={tw`items-center`}>
          <TouchableOpacity
            disabled={icon.name === "VIDE"} // Désactiver si le nom est "VIDE"
            onPress={() => icon.name !== "VIDE" && onIconPress(icon)} // Ignorer onPress si le nom est "VIDE"
          >
            <Image source={icon.image} style={tw`w-16 h-16`} />
            <Text style={tw`text-black text-center`}>{icon.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const ensureFourIcons = (icons, slots) => {
  const placeholders = Array(slots - icons.length).fill({
    image: require("../../assets/Group194.png"), // Chemin de l'image "VIDE"
    name: "VIDE",
    point: "",
  });
  return icons.concat(placeholders);
};

export default IconRow;
