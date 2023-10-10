import * as Facebook from 'expo-facebook';

export const signInWithFacebook = async () => {
  try {
    await Facebook.initializeAsync({appId: 'VOTRE_ID_APP'});
    const {
      type,
      token,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      return token;
    }
  } catch ({ message }) {
    console.log(`Erreur de connexion Facebook : ${message}`);
    return null;
  }
};
