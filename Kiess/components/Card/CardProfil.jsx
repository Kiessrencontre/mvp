import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet,ImageBackground } from "react-native";

const image = require('../../assets/fondProfil.jpeg')

export default function CardP() {
  return (
    
      <View style={styles.containerG}>

      <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
        <View style={styles.header}>
          <View>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.pp}
              />
          </View>
          <View>
            <Text style={styles.colorW}>Léa</Text>
            <Text style={styles.colorW}>Vendeuse (23 ans)</Text>
            <Text style={styles.colorW}>Lyon (69)</Text>
          </View>
        </View>


        <View style={styles.phrase}>

        <Text style={[styles.tagline, styles.colorB]}>
          Sa phrase d’accroche
        </Text>
        <Text style={styles.colorB}>
          Ici pour rencontrer une personne cool, ouverte et qui n’a pas peur de
          se lancer
        </Text>
        </View>


        <View style={styles.audioMatch}>

        <Text style={[styles.audioLabel, styles.colorW]}>Son Audio Match:</Text>
        {/* Placeholder for the audio player. You might use a package like `react-native-sound` for this. */}
        <View style={styles.audioPlaceholder} />
        </View>

        <View style={styles.badgesContainer}>
        <Text style={[styles.badgesLabel, styles.colorB]}>Ses badges</Text>
          {/* Repeat this for each badge */}
            <View style={styles.badge}>               
            <Image source={require("../../assets/logo.png")}style={styles.badgeIcon}/>
            <Image source={require("../../assets/logo.png")}style={styles.badgeIcon}/>
            <Image source={require("../../assets/logo.png")}style={styles.badgeIcon}/>
            </View>

        </View>
              </ImageBackground>
      </View>
</View>

  );
}

const styles = StyleSheet.create({
    container: {
    marginTop: 24, // a modiffier quand nav faite
    height: 472, // Set the height as required
    width: 358,
    // padding: 15,
    backgroundColor: "purple",
    borderRadius: 15, // Add borderRadius here
        overflow: 'hidden',
    alignItems: "center",
    // justifyContent: "space-between", // Distribute the child elements equally
  },
    containerG: {
    alignItems: "center",
    backgroundColor:"white",
  },
  image: {
    // flex: 1,
    justifyContent: 'center',
    width: 358, // This will match the width of the container
    height: 472,

  },
  header: {
    maxHeight:100,
    width: "100%",
    flex: 1, // Assign some flex value
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Align children to the start
    backgroundColor: "black",
    paddingLeft: 22, // Add some padding to move content inside the header
    
  },
  pp: {
    width: 73,
    height: 73,
    marginBottom: 10, // Add some margin for spacing
    marginRight: 14, 
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 10, // Add some margin for spacing
  },
  tagline: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5, // Add some margin for spacing
    marginLeft:28,
  },
  audioMatch:{
    // flex:1,
    width: 346,
    height: 142,
    backgroundColor: "green",

  },
  audioLabel: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10, // Add some margin for spacing
    marginLeft:48,

  },
  audioPlaceholder: {
    width: 305,
    height: 65,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 10,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:21,
  },
  badgesLabel: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10, // Add some margin for spacing
  },
  badgesContainer: {
    maxHeight:73,
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  badgeIcon: {
    width: 30,
    height: 30,
  },
  badge:{
    flexDirection: "row", 
  },
  colorW: {
    color: "white",
  },
  colorB: {
    color: "black",
  },
  phrase:{
    marginTop:26,
    marginBottom:23,
  }

});


