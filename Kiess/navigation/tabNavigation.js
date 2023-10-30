import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar  } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneNumber from '../screens/Register/PhoneNumber';
import BlockMatch from '../screens/Register/BlockMatch';
import ShopClassic from '../screens/Shop/SubsClassic';
import ShopPrenium from '../screens/Shop/SubsPrenium';
import ShopPreniumPlus from '../screens/Shop/SubsPreniumPlus';
import SuperCoin from '../screens/Shop/SuperCoin';
import SuperCoin2 from '../screens/Shop/SuperCoin2';
import Setting from '../screens/Setting/Setting';
import MatchMaking from '../screens/MatchMaking/MatchMaking';
import BlindMatch from '../screens/MatchMaking/BlindMatch/BlindMatch';
import BlindChoise from '../screens/MatchMaking/BlindMatch/BlindChoise';
import ProfileCard from '../screens/MatchMaking/BlindMatch/BlindProfil';
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
        <HomeStack.Navigator
        screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
            <HomeStack.Screen name="PhoneNumber" component={PhoneNumber} />
            <HomeStack.Screen name="BlockMatch" component={BlockMatch} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createNativeStackNavigator();
const ProfilStack = createNativeStackNavigator();
const BoutiqueStack = createNativeStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator
        screenOptions={{ headerShown: false }}>
            <SettingsStack.Screen name="Setting" component={Setting} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}


function ProfilStackScreen() {
    return (
        <ProfilStack.Navigator
        screenOptions={{ headerShown: false }}>
            <ProfilStack.Screen name="Settings" component={SettingsScreen} />
            <ProfilStack.Screen name="Details" component={DetailsScreen} />
        </ProfilStack.Navigator>
    );
}
function MatchStackScreen() {
    return (
        <SettingsStack.Navigator
        screenOptions={{ headerShown: false }}>
            <SettingsStack.Screen name="MatchMaking" component={MatchMaking} />
            <SettingsStack.Screen name="BlindMatchScreen" component={BlindMatch} />
            <SettingsStack.Screen name="BlindChoise" component={BlindChoise} />
            <SettingsStack.Screen name="ProfilCard" component={ProfileCard} />

        </SettingsStack.Navigator>
    );
}


function BoutiqueStackScreen() {
    return (
        <BoutiqueStack.Navigator
        screenOptions={{ headerShown: false }}>
            <BoutiqueStack.Screen name="Shop" component={ShopClassic} />
            <BoutiqueStack.Screen name="ShopPrenium" component={ShopPrenium} />
            <BoutiqueStack.Screen name="ShopPreniumPlus" component={ShopPreniumPlus} />
            <BoutiqueStack.Screen name="SuperCoin" component={SuperCoin} />
            <BoutiqueStack.Screen name="SuperCoin2" component={SuperCoin2} />
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
                <Tab.Screen name="HomeTab" component={HomeStackScreen} />
                <Tab.Screen name="Profil" component={ProfilStackScreen} />
                <Tab.Screen name="MatchTab" component={MatchStackScreen} />
                <Tab.Screen name="Boutique" component={BoutiqueStackScreen} />
                <Tab.Screen name="Réglages" component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

