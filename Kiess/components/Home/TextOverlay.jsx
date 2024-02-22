// TextOverlay.js
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import tw from 'twrnc';

const TextOverlay = ({ backgroundImage, title, subtitle, date, onPress, name }) => {
  return (
    <ImageBackground source={backgroundImage} style={tw`w-full h-full justify-end`} resizeMode="cover">
      <View style={tw`absolute bottom-0 left-0 p-4`}>
        <Text style={tw`text-white text-sm font-bold`}>{title}</Text>
        <Text style={tw`text-white text-xl font-bold mt-1`}>{subtitle}</Text>
        <TouchableOpacity onPress={onPress} style={tw`bg-white mt-2 p-2 rounded-3xl w-25 items-center`}>
          <Text style={tw`text-black text-base font-bold`}>{name}</Text>
        </TouchableOpacity>
        <Text style={tw`text-white text-right text-xs mt-1`}>{date}</Text>
      </View>
    </ImageBackground>
  );
};

export default TextOverlay;
