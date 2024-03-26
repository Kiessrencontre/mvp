// AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeS/HomeScreenRegister';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import LoginHome from '../Login/LoginHome';
import WelcomeKiess from '../screens/Register/WelcomeKiess';
import PhoneNumber from '../screens/Register/PhoneNumber';
import Mail from '../screens/Register/Mail';
import FirstName from '../screens/Register/FirstName';
import YouAre from '../screens/Register/YouAre';
import YouOrientation from '../screens/Register/YourOrientation';
import Birthday from '../screens/Register/BirthDay';
import WhereYouLife from '../screens/Register/WhereYouLife';
import Password from '../screens/Register/Password';
import ProfilPicture from '../screens/Register/ProfilePicture';
import Bravo from '../screens/Register/Bravo';
import BlockMatch from '../screens/Register/BlockMatch';


export const firstFiveRoutes = ['Welcome', 'PhoneNumber', 'Mail', 'FirstName', 'YouAre'];

const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
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
    BlockMatch:{
      screen: BlockMatch
    },
    Mail:{
      screen: Mail
    },
    FirstName:{
      screen: FirstName
    },
    YouAre:{
      screen: YouAre
    },
    YouOrientation:{
      screen: YouOrientation
    },
    BirthDay:{
      screen: Birthday
    },
    WhereYouLife:{
      screen: WhereYouLife
    },
    Password:{
      screen:Password
    },
    ProfilPicture:{
      screen: ProfilPicture
    },
    Bravo:{
      screen: Bravo
    },
    

  },
  {
    // initialRouteName: 'Home',
    initialRouteName: 'Profile',
    defaultNavigationOptions: {
    headerShown: false, // Masquer le header par défaut
    },
  }
);

export default createAppContainer(AppNavigator);
