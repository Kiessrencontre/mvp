// IconRow.js
import React from "react";
import { View,TouchableOpacity, Image, Text } from "react-native";
import tw from "twrnc";

const IconRow = ({ icons, onIconPress }) => {
  // `icons` est un tableau d'objets avec `image` et `name`
  return (
    <View style={tw`flex-row justify-around mt-2`}>
      {icons.map((icon, index) => (
        <View key={index} style={tw`items-center`}>
          <TouchableOpacity
            key={index}
            onPress={() => onIconPress(icon.name)}
          >

          <Image source={icon.image} style={tw`w-16 h-16`} />
          <Text style={tw`text-white`}>{icon.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default IconRow;
