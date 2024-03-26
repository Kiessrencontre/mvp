import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';

const ReportPage = () => {
  const [comment, setComment] = useState('');

  const reportOptions = [
    'Violence', 'Harcèlement', 'Terrorisme',
    'Suicide ou automutilation', 'Nudité', 'Fausse information', 'Autres'
  ];

  return (
    <View style={tw`flex-1 bg-red-500 p-4 `}>
    <View style={tw` items-center`}>

      <Text style={tw`text-white text-2xl font-bold mb-4 items-center `}>SIGNALEMENT</Text>
      <Text style={tw`text-white mb-2`}>
        Tu t'apprêtes à signaler Julia, attention cette opération est irréversible et tout abus sera sanctionné.
      </Text>
      <Text style={tw`text-white font-bold mb-2`}>Pour quels raisons signale tu ce profil ?</Text>
      </View>
      <View style={tw`flex-wrap flex-row justify-between mb-4`}>
        {reportOptions.map((option, index) => (
          <TouchableOpacity key={index} style={tw`mb-2 mr-2 px-3 py-1 border border-white rounded-full`}>
            <Text style={tw`text-white`}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={tw`p-4 h-36 bg-white rounded-lg mb-4`}
        onChangeText={setComment}
        value={comment}
        multiline
        placeholder="Commentaires"
        placeholderTextColor="grey"
      />

      
      <View style={tw` items-center `}>

      <TouchableOpacity style={tw`bg-white p-2 rounded-3xl`}>
        <Text style={tw`text-black px-3 text-center font-bold`}>Envoyer</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReportPage;
