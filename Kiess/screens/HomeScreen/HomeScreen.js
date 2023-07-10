// HomeScreen.js
import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { signInWithApple } from '../../Login/Auth/AppleAuth';
import Google from '../../assets/google.svg'
import FB from '../../assets/FB.svg'

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
        style={styles.logoKiess} />
      <Text style={styles.text} >DÉCOUVREZ QUI VOUS RENCONTREZ</Text>
      <View style={styles.view}>

        <TouchableOpacity style={styles.button} onPress={signInWithApple} >
          <Image source={require('../../assets/Apple_logo_white.png')} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Se connecter avec Apple</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={signInWithApple} >
          <FB style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Se connecter avec Facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={signInWithApple} >
          <Google style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Se connecter avec Google</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.text14} >Problèmes de connexion ?</Text>
        <Button
          // classname="button"
          title="Aller au profil"
          onPress={() => navigation.navigate('Profile')}
        />

        <Text style={styles.text11}>En appuyant sur Connexion, vous acceptez nos Conditions
          générales. Pour en savoir plus sur l’utilisation de vos données, consultez notre Politique de confidentialités et notre Politique en matière de Cookies.</Text>
      </View>
    </LinearGradient>
  );
}
