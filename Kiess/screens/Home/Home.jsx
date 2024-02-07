// Home.js
import React from 'react';
import { View, ImageBackground,Text } from 'react-native';
import tw from 'twrnc';
import Swiper from 'react-native-swiper';
import IconRow from '../../components/Home/IconsRow'; // Assurez-vous que le chemin est correct
import TextOverlay  from '../../components/Home/TextOverlay'; // Assurez-vous que le chemin est correct
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const icons = [
    { image: require("../../assets/Group194.png"), name: "Julia" },
    { image: require("../../assets/Group194.png"), name: "Marc" },
    { image: require("../../assets/Group194.png"), name: "Julia" },
    { image: require("../../assets/Group194.png"), name: "Marc" },
    
    // ... plus d'icônes ...
  ];
  const handleIconPress = (userName) => {
    // Naviguez vers ChatScreen avec le paramètre userName
    navigation.navigate('ChatScreen', { userName });
  };


  return (
    <View style={tw`flex-1`}>
      <Swiper
        style={tw`flex-grow`}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={5}
        loop={true}
        paginationStyle={{ display: 'none'}}
        activeDotColor="red"
      >
        <View>
        <TextOverlay
          backgroundImage={require("../../assets/LES-OOPO-CARRE.png")}
          title="NOUVEAU MATCHMAKING"
          subtitle="L’amour rend aveugle"
          date="Du 16/09/23 au 24/09/23"
          name="Essayer"
          onPress={() => console.log('Essayer pressed')}
          />
          </View>

          <View>
        <TextOverlay
          backgroundImage={require("../../assets/LESJUS.png")}
          title="ÉVENEMENT"
          subtitle="Snowvan x KIESS"
          name="Réserver"
          // date="Du 16/09/23 au 24/09/23"
          onPress={() => console.log('Essayer pressed')}
          />
          </View>

          <View>
          <TextOverlay
          backgroundImage={require("../../assets/SPOTIFY.png")}
          title="NOUVEL ALBUM"
          subtitle="00:60 - Amour Justesse"
          name="Écouter"
          // date="Du 16/09/23 au 24/09/23"
          onPress={() => console.log('Essayer pressed')}
          />
          </View>
        
          <View>
          <TextOverlay
          backgroundImage={require("../../assets/SPORT.png")}
          title="PROMOTION"
          subtitle="Gymshark"
          name="Acheter"
          // date="Du 16/09/23 au 24/09/23"
          onPress={() => console.log('Essayer pressed')}
          />
          </View>
          <View>
          <TextOverlay
          backgroundImage={require("../../assets/MORE.png")}
          title="KIESS +"
          subtitle="Toujours plus"
          name="S’abonner"
          // date="Du 16/09/23 au 24/09/23"
          onPress={() => console.log('Essayer pressed')}
          />
          </View>

          <View>
          <TextOverlay
          backgroundImage={require("../../assets/UNOHOME.png")}
          title="KIESS x UNO"
          subtitle="Jeu, 7 et Matchs"
          name="Jouer"
          // date="Du 16/09/23 au 24/09/23"
          onPress={() => console.log('Essayer pressed')}
          />
          </View>
        
      </Swiper>

      
      <IconRow icons={icons} onIconPress={handleIconPress} />
    </View>
  );
};

export default Home;
