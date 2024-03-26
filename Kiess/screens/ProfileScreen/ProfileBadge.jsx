import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, TextInput } from 'react-native';
import tw from 'twrnc';


const badgesData = [
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
        id: 7,
        icon: require("../../assets/Badges/Jardinage.png"),
        label: "Badge 1",
      },
      {
        id: 8,
        icon: require("../../assets/Badges/Aubergine.png"),
        label: "Badge 2",
      },
      {
        id: 9,
        icon: require("../../assets/Badges/Concombre.png"),
        label: "Badge 3",
      },
      {
        id: 10,
        icon: require("../../assets/Badges/JeudePapier.png"),
        label: "Badge 4",
      },
      {
        id: 11,
        icon: require("../../assets/Badges/Jardinage.png"),
        label: "Badge 5",
      },
      {
        id: 12,
        icon: require("../../assets/Badges/Graffiti.png"),
        label: "Badge 6",
      },
];

const ProfilBadgePage = () => {

    const [selectedBadges, setSelectedBadges] = useState([]);

    const toggleBadge = (badge) => {
      if (selectedBadges.some(selectedBadge => selectedBadge.id === badge.id)) {
        setSelectedBadges(currentBadges => 
          currentBadges.filter(selectedBadge => selectedBadge.id !== badge.id)
        );
      } else {
        setSelectedBadges(currentBadges => [...currentBadges, badge]);
      }
    };


  const numColumns = 3; 

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* TopBar */}
      <View style={tw`flex-row items-center justify-between px-4 bg-white py-3 border-gray-200`}>
        <TouchableOpacity>
          {/* <IconBack /> */}
        </TouchableOpacity>
        <TextInput
          style={tw`flex-1 p-2 bg-gray-200 rounded-lg`}
          placeholder="Recherche de badges"
        />
        <TouchableOpacity>
          {/* Icone avec trois points */}
          <Text>...</Text>
        </TouchableOpacity>

      </View>
      {/* Sous-titre */}
      <Text style={tw`px-4 mt-2 text-xs text-gray-600`}>
        Sélectionnez jusqu'à 30 badges pour affiner vos matchmaking. Restez appuyer sur un badge pour voir sa signification.
      </Text>
      

      {/* Grid de badges */}
      <FlatList
        data={badgesData}
        numColumns={numColumns} 
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => toggleBadge(item)}
            style={tw`p-2 items-center justify-center w-1/${numColumns}`}
          >
            <Image source={item.icon} style={tw`w-10 h-10`} />
            <Text>{item.label}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => `badge-${item.id}`} // Assurez-vous que la key est unique
      />

      {/* Compteur de badges */}
      <Text style={tw`px-4 text-center`}>{selectedBadges.length}/30</Text>

      {/* Bouton MES BADGES */}
      <View style={tw`mx-5`}>
        <Text style={tw`px-4 text-center text-white font-bold bg-blue-500 py-2 mx-5 my-5 rounded-md`}>MES BADGES</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {selectedBadges.map((badge) => (
            <View key={badge.id} style={tw`p-2 items-center justify-center`}>
              <Image source={badge.icon} style={tw`w-10 h-10`} />
              <Text style={tw`text-sm`}>{badge.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

    
     
    </View>
  );
};

export default ProfilBadgePage;
