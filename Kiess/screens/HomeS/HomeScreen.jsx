// Home.js
import React from "react";
import { View, ImageBackground, Text } from "react-native";
import tw from "twrnc";
import Swiper from "react-native-swiper";
import IconRow from "../../components/Home/IconsRow";
import TextOverlay from "../../components/Home/TextOverlay";
import { useNavigation } from "@react-navigation/native";
import MyCarousel from "../../components/Home/CarouselHome";

const Home = () => {
  const navigation = useNavigation();
  const icons = [
    {
      image: require("../../assets/Group194.png"),
      name: "Julia",
      point: "150",
    },
    // { image: require("../../assets/Group194.png"), name: "Marc", point: "200" },
    // // { image: require("../../assets/Group194.png"), name: "from", point: "200" },
    // { image: require("../../assets/Group196.png"), name: "to", point: "200" },

    // ... plus d'icônes ...
  ];
  const handleIconPress = (icon) => {
    // Naviguez vers ChatScreen avec le paramètre userName
    // console.log('Icon pressed: ', icon);
    navigation.navigate("ChatScreen", {
      userName: icon.name,
      userImage: icon.image,
      userPoints: icon.point,
    });
  };
const userStatus= 'Gold'
  return (
    <View style={tw`flex-1`}>
     
      
      <MyCarousel />

      <IconRow icons={icons} onIconPress={handleIconPress} isGold={userStatus === 'Gold'} />

    </View>
  );
};

export default Home;