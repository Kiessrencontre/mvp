import * as GoogleSignIn from 'expo-google-sign-in';

export const signInWithGoogle = async () => {
  try {
    await GoogleSignIn.initAsync({clientId: 'VOTRE_ID_CLIENT'});
    await GoogleSignIn.askForPlayServicesAsync();
    const { type, user } = await GoogleSignIn.signInAsync();
    if (type === 'success') {
      return user;
    }
  } catch ({ message }) {
    console.log('Erreur de connexion : ' + message);
    return null;
  }
};
