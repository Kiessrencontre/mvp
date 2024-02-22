import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import tw from "twrnc";

const IconRow = ({ icons, onIconPress }) => {
  return (
    <View style={tw`flex-row justify-around mt-2`}>
      {icons.map((icon, index) => (
        <View key={index} style={tw`items-center`}>
          <TouchableOpacity
            onPress={() => onIconPress(icon)} // Passer l'objet icon complet
          >
            <Image source={icon.image} style={tw`w-16 h-16`} />
            <Text style={tw`text-black text-center`}>{icon.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default IconRow;
