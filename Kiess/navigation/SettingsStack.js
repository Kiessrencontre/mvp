import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setting from '../screens/Setting/Setting';
import PersonalInfo from '../screens/Setting/PersonalInfo';
import Discovery from '../screens/Setting/Discovery';
import NotificationSettings from '../screens/Setting/Notifications';


const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <SettingsStack.Screen name="Setting" component={Setting} />
            <SettingsStack.Screen name="PersonalInfo" component={PersonalInfo} />
            <SettingsStack.Screen name="Discovery" component={Discovery} />
            <SettingsStack.Screen name="NotificationsSetting" component={NotificationSettings} />
        </SettingsStack.Navigator>
    );
}