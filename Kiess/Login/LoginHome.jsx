// LoginHome.js
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { signInWithFacebook } from './Auth/FacebookAuth';
import { signInWithApple } from './Auth/AppleAuth';
// import { signInWithGoogle } from './Auth/GoogleAuth';

export default function LoginHome() {
  return (
    <LinearGradient
      colors={['#E3354E', '#CD3070']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Button title="Se connecter avec Apple" onPress={signInWithApple} />
        <Button title="Se connecter avec Facebook" onPress={signInWithFacebook} />
        {/* <Button title="Se connecter avec Google" onPress={signInWithGoogle} /> */}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
