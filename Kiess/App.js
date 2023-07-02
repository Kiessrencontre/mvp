import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LoginHome from './Login/LoginHome';

export default function App() {
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
      <LoginHome />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
