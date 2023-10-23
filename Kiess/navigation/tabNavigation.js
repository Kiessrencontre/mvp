import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar  } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneNumber from '../screens/Register/PhoneNumber';
import BlockMatch from '../screens/Register/BlockMatch';
import ShopClassic from '../screens/Shop/SubsClassic';
// import HomeScreen from '../screens/Home/HomeScreen';



function DetailsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!erbrg</Text>
        </View>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Go to PhoneNumber"
                onPress={() => navigation.navigate('PhoneNumber')}
            />

        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
            <HomeStack.Screen name="PhoneNumber" component={PhoneNumber} />
            <HomeStack.Screen name="BlockMatch" component={BlockMatch} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createNativeStackNavigator();
const BoutiqueStack = createNativeStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}


function ProfilStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}
function MatchStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}


function BoutiqueStackScreen() {
    return (
        <BoutiqueStack.Navigator>
            <BoutiqueStack.Screen name="Shop" component={ShopClassic} />
            <BoutiqueStack.Screen name="Settings" component={SettingsScreen} />
        </BoutiqueStack.Navigator>
    );
}
const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                tabBar={(props) => <BottomTabBar {...props} style={{ height: 98 }} />}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Profil" component={ProfilStackScreen} />
                <Tab.Screen name="Match" component={MatchStackScreen} />
                <Tab.Screen name="Boutique" component={BoutiqueStackScreen} />
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

