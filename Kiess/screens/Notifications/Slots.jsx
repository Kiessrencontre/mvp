import React from 'react';
import { View, TextInput, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';


const Vide = require('../../assets/Notifications/KIESSVIDE.png');
const One = require('../../assets/Notifications/Group194.png');

const totalSlots = 5;

const emptyUser = {
    id: 'empty',
    name: 'Vide',
    message: '',
    points: '',
    image: Vide, // Replace with actual image path for empty slot
    date: '',
  };


// This is just a placeholder for your user data. Replace it with your actual user data.
const actualUsers = [
  {
    id: '1',
    name: 'Julia',
    message: 'Hey, comment tu...',
    points: '47 points',
    image: One, // Replace with actual image path
    date: 'Jeu 18:45',
  },
  {
    id: '2',
    name: 'Julia',
    message: 'Hey, comment tu...',
    points: '47 points',
    image:One , // Replace with actual image path
    date: 'Jeu 18:45',
  },
  {
    id: '3',
    name: 'Julia',
    message: 'Hey, comment tu...',
    points: '47 points',
    image: One, // Replace with actual image path
    date: 'Jeu 18:45',
  },
  
  // ... other users
];

const filledUsers = [...actualUsers];
while (filledUsers.length < totalSlots) {
  filledUsers.push({ ...emptyUser, id: `empty-${filledUsers.length}` });
}

const Slots = () => {

    const slotsAvailable = totalSlots - actualUsers.length;
  return (
    <View style={tw`flex-1 bg-white`}>
      

      {/* Search Input */}
      <TextInput
        style={tw`bg-gray-200 mx-4 my-2 p-2 rounded-full`}
        placeholder="Recherche d’une discussion"
      />

    {/* Empty slots footer */}
    <View style={tw`flex-row  justify-start px-8 py-2`}>
        <Text style={tw`text-gray-500 bg-gray-200 rounded-full px-2 `}>{`${slotsAvailable}/${totalSlots} `}</Text>
        <Text style={tw`text-gray-500`}>slots disponibles</Text>
      </View>


      {/* Chat list */}
      <FlatList
        data={filledUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={tw.style(
            'flex-row items-center px-7 py-2 h-20',
            { backgroundColor: index % 2 === 0 ? '#F0F0F0' : 'bg-white' } // Alternate the background color
          )}>
            <Image
              source={item.id.startsWith('empty') ? Vide : item.image }
              style={tw`w-15 h-15`}
            />
            <View style={tw`flex-1 ml-2`}>
              <Text style={tw`font-bold`}>{item.name}</Text>
              <Text style={tw`text-gray-500`}>{item.message}</Text>
            </View>
            <View>
            <Text style={tw.style(
          'text-white bg-red-500 rounded-full',
          item.points ? 'px-2' : 'px-0', // Conditional style
          { display: item.points ? 'flex' : 'none' } // Hide the element if points are empty
        )}>{item.points}</Text>
              <Text style={tw`text-gray-400 text-xs`}>{item.date}</Text>
            </View>
          </View>
        )}
      />
      
    </View>
  );
};

export default Slots;
