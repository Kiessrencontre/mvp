import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, ScrollView, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
// const imageWidth = width;
// const imageHeight = width * 0.6; // example ratio


const data = [
  {
    title: "NOUVEAU MATCHMAKING",
    subtitle: "L’amour rend aveugle",
    image: require("../../assets/Home/LES-OOPO-CARRE.png"),
    buttonTitle: "Acheter",
    onPress: () => console.log('Acheter pressed')
  },
  {
    title: "ÉVENEMENT",
    subtitle: "Snowvan x KIESS",
    image: require("../../assets/Home/LESJUS.png"),
    buttonTitle: "Réserver",
    onPress: () => console.log('Réserver pressed')
  },
  {
    title: "KIESS +",
    subtitle: "Toujours plus",
    image: require("../../assets/Home/MORE.png"),
    buttonTitle: "Acheter",
    onPress: () => console.log('Acheter pressed')
  },
  // ...autres éléments
];



const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    width: 373,
    alignSelf: 'center',
  },
  container: {
    width: 373,  // Width of the image container
    height: 511, // Height of the image container
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  image: {
    width: 373,  // Width of the image
    height: 511, // Height of the image
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20, // Padding horizontal pour les côtés
    height: 33, // Hauteur fixe du bouton
    justifyContent: 'center', // Centre le texte verticalement
    alignItems: 'center', // Centre le texte horizontalement
    borderRadius: 30,
    alignSelf: 'flex-start'
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
      scrollViewRef.current.scrollTo({ x: nextIndex * 373, animated: true });
      setCurrentIndex(nextIndex);
    }, 7000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  return (
    <View>
      <ScrollView
      style={styles.scrollView}
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.floor(e.nativeEvent.contentOffset.x / 373);
          setCurrentIndex(index);
        }}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>

              <View style={{ flexDirection: 'row',}}>

              <TouchableOpacity
                style={styles.button}
                onPress={item.onPress}
                >
                <Text style={styles.buttonText}>{item.buttonTitle}</Text>
              </TouchableOpacity>
                </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Carousel;

// Usage de Carousel dans un compos
