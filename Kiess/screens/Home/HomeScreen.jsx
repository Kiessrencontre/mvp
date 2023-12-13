// HomeScreen.js
import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
// import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { signInWithApple } from "../../Login/Auth/AppleAuth";
import Google from "../../assets/google.svg";
import FB from "../../assets/FB.svg";

import tw from "twrnc";

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      // Les couleurs du dégradé
      colors={["#E3354E", "#CD3070"]}
      // Le début et la  fin du dégradé
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      // Assurez-vous que le dégradé recouvre tout l'écran
      style={tw`flex-1 items-center justify-center`}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={tw`mt-20 w-72 h-37`}
      />
      <Text
        style={tw`mt-9 text-white font-bold text-base leading-normal tracking-wide`}
      >
        DÉCOUVREZ QUI VOUS RENCONTREZ
      </Text>
      <View>
        <View style={tw`items-center`}> 
          <TouchableOpacity
            style={tw`flex-row w-85 h-10 rounded-full border border-white bg-transparent items-center justify-center my-2.5`}
            onPress={signInWithApple}
          >
            <Image
              source={require("../../assets/Apple_logo_white.png")}
              style={tw`w-4 h-5 ml-14`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`text-white text-center font-normal text-lg w-55`}>Se connecter avec Apple</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`flex-row w-85 h-10 rounded-full border border-white bg-transparent items-center justify-center my-2.5`}
            onPress={signInWithApple}
          >
            <FB style={tw `w-4 h-5 ml-14`} />
            <View style={tw`flex-1`}>
              <Text style={tw`text-white text-center font-normal text-lg w-60`}>Se connecter avec Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`flex-row w-85 h-10 rounded-full border border-white bg-transparent items-center justify-center my-2.5`}
            onPress={signInWithApple}
          >
            <Google style={tw `w-4 h-5 ml-14`} />
            <View style={tw`flex-1`}>
              <Text style={tw`text-white text-center font-normal text-lg w-55`}>Se connecter avec Google</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={tw`mt-0.5 mb-10 text-white text-center text-sm`}>Problèmes de connexion ?</Text>

        <Button
          style={tw`mt-20`}
          title="Aller au profil"
          onPress={() => navigation.navigate("Welcome")}
        />

        <Text style={tw `mt-20 text-white text-center text-xs `}>
          En appuyant sur Connexion, vous acceptez nos Conditions générales.
          Pour en savoir plus sur l’utilisation de vos données, consultez notre
          Politique de confidentialités et notre Politique en matière de
          Cookies.
        </Text>
      </View>
    </LinearGradient>
  );
}
