import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchMaking from '../screens/MatchMaking/MatchMaking';
import BlindMatch from '../screens/MatchMaking/BlindMatch/BlindMatch';
import BlindChoise from '../screens/MatchMaking/BlindMatch/BlindChoise';
import ProfileCard from '../screens/MatchMaking/BlindMatch/BlindProfil';
import TopBar from './TopBar';


const MatchStack = createNativeStackNavigator();

export default function MatchStackScreen() {
    return (
        <MatchStack.Navigator screenOptions={{
            headerShown: true,
            header: ({ navigation }) => (
                <TopBar
                    goBack={() => navigation.goBack()} />)
        }}>
            <MatchStack.Screen name="MatchMaking" component={MatchMaking} />
            <MatchStack.Screen name="BlindMatchScreen" component={BlindMatch} />
            <MatchStack.Screen name="BlindChoise" component={BlindChoise} />
            <MatchStack.Screen name="ProfilCard" component={ProfileCard} />
        </MatchStack.Navigator>
    );
}
