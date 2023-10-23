import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import tw from "twrnc";


export default function ShopClassic() {
  return (
    <View  style={tw`flex-1 items-center justify-center bg-rose-500 `}>
      <View style={tw`rounded-lg items-center justify-center h-159 w-88 bg-orange-300 bg-opacity-30`} >

      <View style={tw`flex-row w-full items-center justify-center `}>
        <View>
        <TouchableOpacity><Text>{"<"}</Text></TouchableOpacity>
        </View>

        <View style={tw` mx-25 `}>
        <Text>KÏESS</Text>
        </View>

        <View>
        <TouchableOpacity><Text>{">"}</Text></TouchableOpacity>
        </View>
          
        
      </View>

      <Text style={tw`text-white text-xl font-bold`}>CLASSIQUE</Text>

      <View style={tw`text-white`}>
        <Text style={tw `text-base h-9 text-white`}>🔒 Reduction prix cases</Text>
        <Text style={tw `text-base h-9 text-white`}>🔓 Slots match</Text>
        <Text style={tw `text-base h-9 text-white`}>🔒 24h Temps attente match</Text>
        <Text style={tw `text-base h-9 text-white`}>🔒 Passeport Mondiale</Text>
        <Text style={tw `text-base h-9 text-white`}>🔒 Jeux Kiess</Text>
        <Text style={tw `text-base h-9 text-white`}>🔒 Badges exclusifs</Text>
        <Text style={tw `text-base h-9 text-white`}>🔒 Accès BETA des features</Text>
        <Text style={tw `text-base h-9 text-white`}>🔒 0 super pièce/semaine</Text>
      </View>
      
      <Text style={tw `text-2xl text-white`}>0€/mois</Text>
      <Text style={tw `text-xs text-white`} >Abonnement sans engagement</Text>

      <TouchableOpacity style={tw`bg-amber-50 h-8 rounded-full w-32 items-center justify-center mt-8`}>
        <Text style={tw `text-base text-rose-500 font-bold`}>Gratuit</Text>
      </TouchableOpacity>

      </View>

    </View>
  );
}

