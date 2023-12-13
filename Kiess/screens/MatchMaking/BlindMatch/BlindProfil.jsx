import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import CardP from "../../../components/Card/CardProfil";

function ProfileCard() {
  return (
    // <View style={styles.containerG}>
    //   <View style={styles.container}>
    //     <View style={styles.header}>
    //       <View>
    //         <Image
    //           source={require("../../../assets/logo.png")}
    //           style={styles.pp}
    //         />
    //       </View>
    //       <View>
    //         <Text style={styles.colorW}>Léa</Text>
    //         <Text style={styles.colorW}>Vendeuse (23 ans)</Text>
    //         <Text style={styles.colorW}>Lyon (69)</Text>
    //       </View>
    //     </View>


    //     <View style={styles.phrase}>

    //     <Text style={[styles.tagline, styles.colorW]}>
    //       Sa phrase d’accroche
    //     </Text>
    //     <Text style={styles.colorW}>
    //       Ici pour rencontrer une personne cool, ouverte et qui n’a pas peur de
    //       se lancer
    //     </Text>
    //     </View>


    //     <View style={styles.audioMatch}>

    //     <Text style={[styles.audioLabel, styles.colorW]}>Son Audio Match:</Text>
    //     {/* Placeholder for the audio player. You might use a package like `react-native-sound` for this. */}
    //     <View style={styles.audioPlaceholder} />
    //     </View>

    //     <View style={styles.badgesContainer}>
    //     <Text style={[styles.badgesLabel, styles.colorW]}>Ses badges</Text>
    //       {/* Repeat this for each badge */}
    //         <View style={styles.badge}>               
    //         <Image source={require("../../../assets/logo.png")}style={styles.badgeIcon}/>
    //         <Image source={require("../../../assets/logo.png")}style={styles.badgeIcon}/>
    //         <Image source={require("../../../assets/logo.png")}style={styles.badgeIcon}/>
    //         </View>

    //     </View>
    //   </View>
    //   <View style={styles.footer}>
    //     <TouchableOpacity style={styles.rejectButton}>
    //       <Text>X</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.acceptButton}>
    //       <Text>❤️</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    <CardP/>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100, // a modiffier quand nav faite
    height: 472, // Set the height as required
    width: "100%",
    padding: 15,
    backgroundColor: "purple",
    alignItems: "center",
    // justifyContent: "space-between", // Distribute the child elements equally
  },
  containerG: {
    height: "100%", // Set the height as required
    width: "100%",
    padding: 15,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center", // Distribute the child elements equally
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
  footer: {
    flex: 1, // Assign some flex value
    flexDirection: "row",
    justifyContent: "space-between",
    width: 191,
    alignItems: "center",
  },
  rejectButton: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 50,
  },
  acceptButton: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 50,
  },
  colorW: {
    color: "white",
  },
  phrase:{
    marginTop:26,
    marginBottom:23,
  }

});

export default ProfileCard;
