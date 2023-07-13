import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Nextbutton = ({ onPress, title, buttonStyle, textStyle }) => {
    return (
        <LinearGradient
            // Les couleurs du dégradé
            colors={['#E3354E', '#CD3070']}
            // Le début et la fin du dégradé
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            // Assurez-vous que le dégradé recouvre tout l'écran
            style={[styles.button, buttonStyle]}
        >
            <TouchableOpacity onPress={onPress} style={styles.touchable}>
                <Text style={[styles.text, textStyle]}>Continuer</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        overflow: 'hidden',
      },
      touchable: {
        width: 227,
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
