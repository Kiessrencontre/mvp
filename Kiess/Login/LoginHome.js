import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { signInWithFacebook } from './Auth/FacebookAuth';
import { signInWithApple } from './Auth/AppleAuth';
import { signInWithGoogle } from './Auth/GoogleAuth';

export default function LoginHome() {
  return (
    <View style={styles.container}>
      <Button title="Se connecter avec Apple" onPress={signInWithApple} />
      <Button title="Se connecter avec Facebook" onPress={signInWithFacebook} />
      <Button title="Se connecter avec Google" onPress={signInWithGoogle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
