import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Nextbutton = ({ onPress, title = 'Continuer', buttonStyle, textStyle }) => {
  // Vérifier si la longueur du titre est supérieure à 15 caractères
  const isLongTitle = title.length > 15;

  return (
    <LinearGradient
      // Les couleurs du dégradé
      colors={['#E3354E', '#CD3070']}
      // Le début et la fin du dégradé
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      // Assurez-vous que le dégradé recouvre tout l'écran
      style={[
        styles.button,
        buttonStyle,
        isLongTitle ? { width: 327 } : null, // Ajuster la largeur du bouton si le titre est long
      ]}
    >
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    borderRadius: 30,
    overflow: 'hidden',
    width: 227, // Taille de base du bouton
  },
  touchable: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});

export default Nextbutton;
