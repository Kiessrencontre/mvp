// HomeScreen.js
import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import './styles.scss'
import { signInWithApple } from '../../Login/Auth/AppleAuth';


export default function HomeScreen({ navigation }) {
  return (

    <LinearGradient
      // Les couleurs du dégradé
      colors={['#E3354E', '#CD3070']}
      // Le début et la fin du dégradé
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      // Assurez-vous que le dégradé recouvre tout l'écran
      style={styles.container}
    >
      <Image source={require('../../assets/logo.png')}
        style={styles.logo} />
      <Text style={styles.text} >DÉCOUVREZ QUI VOUS RENCONTREZ</Text>
      <View style={styles.view}>

        

      <Button title="Se connecter avec Apple" onPress={signInWithApple} />

        <Button
          // classname="button"
          title="Aller au profil"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </LinearGradient>
  );
}
