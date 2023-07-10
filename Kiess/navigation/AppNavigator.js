// AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import LoginHome from '../Login/LoginHome';
import WelcomeKiess from '../screens/Block1/WelcomeKiess';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Welcome :{
      screen: WelcomeKiess,
    }


  },
  {
    // initialRouteName: 'Home',
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
    headerShown: false, // Masquer le header par défaut
    },
  }
);

export default createAppContainer(AppNavigator);
