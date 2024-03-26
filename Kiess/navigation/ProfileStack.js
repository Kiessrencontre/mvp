import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/ProfileScreen/ProfileScreen';
import Discover from '../screens/Discover/Discover';
// import ProfileDetails from '../screens/Profile/ProfileDetails';
import TopBar from './TopBar';
import ReportPage from '../screens/Discover/ReportPage';
import ProfilBadgePage from '../screens/ProfileScreen/ProfileBadge';
import CatchphraseScreen from '../screens/ProfileScreen/ProfileMaPhrase';
import Slots from '../screens/Notifications/Slots';
import NotificationsScreen from '../screens/Notifications/Notifications';


const ProfileStack = createNativeStackNavigator();

export default function ProfilStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{
      headerShown: true,
      header: ({ navigation }) => (
        <TopBar
          goBack={() => navigation.goBack()} />)
    }}>
      {/* <ProfileStack.Screen name="Profile" component={Profile} /> */}
      <ProfileStack.Screen name="Discover" component={Discover}
      options={{ headerShown: false }} 
      />
      <ProfileStack.Screen name="Slots" component={Slots} />
      <ProfileStack.Screen name="Notification" component={NotificationsScreen}
      options={{ headerShown: false }} />
      <ProfileStack.Screen name="ProfileDetails" component={ProfilBadgePage} />
      <ProfileStack.Screen name="ProfileMaPhrase" component={CatchphraseScreen} />
      <ProfileStack.Screen name="ReportPage" component={ReportPage} />



    </ProfileStack.Navigator>
  );
}
