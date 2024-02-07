import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/ProfileScreen/ProfileScreen';
// import ProfileDetails from '../screens/Profile/ProfileDetails';


const ProfileStack = createNativeStackNavigator();

export default function ProfilStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      {/* <ProfileStack.Screen name="ProfileDetails" component={ProfileDetails} /> */}
      
    </ProfileStack.Navigator>
  );
}
