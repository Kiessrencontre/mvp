import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
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
import Home from '../screens/Home/Home';
// import HomeScreen from '../screens/Home/HomeScreen';
import TopBar from './TopBar';


function DetailsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!erbrg</Text>
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
            screenOptions={{
                headerShown: true,
                header: ({ navigation }) => (
                    <TopBar
                        goBack={() => navigation.goBack()} />)
            }}>
            <HomeStack.Screen name="Home" component={Home} />
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
            <SettingsStack.Screen name="PersonalInfo" component={PersonalInfo} />
            <SettingsStack.Screen name="Discovery" component={Discovery} />
            <SettingsStack.Screen name="NotificationsSetting" component={NotificationSettings} />
            
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
            screenOptions={{
                headerShown: true,
                header: ({ navigation }) => (
                    <TopBar
                        goBack={() => navigation.goBack()} />)
            }}>
            {/* <SettingsStack.Screen name="MatchMaking" component={MatchMaking} />
            <SettingsStack.Screen name="BlindMatchScreen" component={BlindMatch} />
            <SettingsStack.Screen name="BlindChoise" component={BlindChoise} /> */}
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
// import IconProfl from '../assets/iconProfil.svg';
import IconProfl from '../components/IconProfil';
import IconBoutique from '../components/IconBoutique';
import IconReglage from '../components/IconReglage';
import IconHome from '../components/IconHome';
import IconKiess from '../components/IconKiess';
import PersonalInfo from '../screens/Setting/PersonalInfo';
import Discovery from '../screens/Setting/Discovery';
import NotificationSettings from '../screens/Setting/Notifications';


const Tab = createBottomTabNavigator();
const defaultColor = "#3D3D3D";
const focusedColor = "#FC2D3D";


export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                tabBar={(props) => <BottomTabBar {...props} style={{ height: 98 }} />}
            >
                <Tab.Screen name="HomeTab" component={HomeStackScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <IconHome fill={focused ? focusedColor : defaultColor} />
                        ),
                    }} />
                <Tab.Screen name="Profil" component={ProfilStackScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <IconProfl
                                fill={focused ? focusedColor : defaultColor}
                            />
                        )
                    }}
                />
                <Tab.Screen name="MatchTab" component={MatchStackScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <IconKiess fill={focused ? focusedColor : defaultColor} />
                        ),
                    }}
                />
                <Tab.Screen name="Boutique" component={BoutiqueStackScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <IconBoutique fill={focused ? focusedColor : defaultColor} />
                        ),
                    }} />
                <Tab.Screen name="Réglages" component={SettingsStackScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <IconReglage fill={focused ? focusedColor : defaultColor} />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

