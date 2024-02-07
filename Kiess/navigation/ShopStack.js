import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopClassic from '../screens/Shop/SubsClassic';
import ShopPremium from '../screens/Shop/SubsPrenium';
import ShopPremiumPlus from '../screens/Shop/SubsPreniumPlus';
import SuperCoin from '../screens/Shop/SuperCoin';
import SuperCoin2 from '../screens/Shop/SuperCoin2';

const ShopStack = createNativeStackNavigator();

export default function ShopStackScreen() {
    return (
        <ShopStack.Navigator screenOptions={{ headerShown: false }}>
            <ShopStack.Screen name="ShopClassic" component={ShopClassic} />
            <ShopStack.Screen name="ShopPremium" component={ShopPremium} />
            <ShopStack.Screen name="ShopPremiumPlus" component={ShopPremiumPlus} />
            <ShopStack.Screen name="SuperCoin" component={SuperCoin} />
            <ShopStack.Screen name="SuperCoin2" component={SuperCoin2} />
        </ShopStack.Navigator>
    );
}
