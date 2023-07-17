// AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import LoginHome from '../Login/LoginHome';
import WelcomeKiess from '../screens/Block1/WelcomeKiess';
import PhoneNumber from '../screens/Block1/PhoneNumber';
import Mail from '../screens/Block1/Mail';
import FirstName from '../screens/Block1/FirstName';


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
    },
    PhoneNumber :{
      screen: PhoneNumber
    },
    Mail:{
      screen: Mail
    },
    FirstName:{
      screen: FirstName
    },

  },
  {
    // initialRouteName: 'Home',
    initialRouteName: 'Mail',
    defaultNavigationOptions: {
    headerShown: false, // Masquer le header par défaut
    },
  }
);

export default createAppContainer(AppNavigator);
