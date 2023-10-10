import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Sexebutton = ({ onPress, title, buttonStyle, textStyle, isSelected }) => {
  const gradientColors = isSelected ? ['#FE4365', '#FC2D3D'] : ['#FFF', '#FFF'];
  const textColor = isSelected ? '#FFF' : '#000';
  const borderColor = isSelected ? '#FFF' : '#000';

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.button, buttonStyle, { borderColor }]}
    >
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <Text style={[styles.text, textStyle, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button:{
    borderRadius: 30,
    overflow:'hidden',
    borderWidth: 2,
    marginTop:10,
  },
  touchable:{
    width: 227,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems:'center',
    justifyContent: 'center',
  },
  text:{
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '400', 
  },
});
export default Sexebutton;