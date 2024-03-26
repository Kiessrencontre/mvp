import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tw from "twrnc";

const CatchphraseScreen = () => {
  const [catchphrase, setCatchphrase] = useState("");

  const saveCatchphrase = () => {
    // Enregistrez la phrase d'accroche ici
    // Par exemple, envoyez-la à un backend ou stockez-la dans le state de l'application
  };

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      {/* Title and Input */}
      <View style={tw`mt-4 p-4`}>
        <Text style={tw`text-sm font-bold text-gray-700 mb-2`}>
          Écrivez un petit texte pour donner envie à vos futurs matchs
        </Text>

        {/* <TouchableOpacity
        onPress={saveCatchphrase}
        style={tw`items-center justify-center bg-red-500 py-3 mx-4 my-6 rounded-md`}
        >
      </TouchableOpacity> */}

        {/* Save Button */}
        <View style={tw``}>
          <Text style={tw`text-white bg-red-500 absolute font-bold  z-10`}>
            MA PHRASE D'ACCROCHE
          </Text>

          <TextInput
            value={catchphrase}
            onChangeText={setCatchphrase}
            placeholder="Ma phrase d'accroche"
            multiline
            style={tw`h-30 bg-gray-100 p-3 text-gray-800`}
          />
        </View>
      </View>
    </View>
  );
};

export default CatchphraseScreen;
