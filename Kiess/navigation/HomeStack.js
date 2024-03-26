import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeS/HomeScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import PhoneNumber from '../screens/Register/PhoneNumber';
import BlockMatch from '../screens/Register/BlockMatch';
import TopBar from './TopBar';


const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: true,
                header: ({ navigation }) => (
                    <TopBar
                        goBack={() => navigation.goBack()} />)
            }}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            {/* <HomeStack.Screen name="HomeScreen" component={} /> */}
            <HomeStack.Screen name="ChatScreen" component={ChatScreen}
            options={{ headerShown: false }}
            />
            <HomeStack.Screen name="PhoneNumber" component={PhoneNumber} />
            <HomeStack.Screen name="BlockMatch" component={BlockMatch} />
        </HomeStack.Navigator>
    );
}
