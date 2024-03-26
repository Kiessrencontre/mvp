import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStack';
import ProfilStackScreen from './ProfileStack';
import MatchStackScreen from './MatchStack';
import ShopStackScreen from './ShopStack';
import SettingsStackScreen from './SettingsStack';
import IconHome from '../components/Icons/IconHome';
import IconKiess from '../components/Icons/IconKiess';
import IconBoutique from '../components/Icons/IconBoutique';
import IconReglage from '../components/Icons/IconReglage';
import IconProfil from '../components/Icons/IconProfil';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const defaultColor = "#3D3D3D";
const focusedColor = "#FC2D3D";

export default function MyTabs() {
    return (
        // <Tab.Navigator
        //     screenOptions={{ headerShown: false }
        // }
        //     tabBar={(props) => <BottomTabBar {...props} style={{ height: 98 }} />}
        //     // tabBar={props => <BottomTabBar {...props} />}

        // >

        <Tab.Navigator
            screenOptions={({ route }) => ({
                // Désactiver la visibilité de la tab bar pour l'écran ChatScreen
                tabBarVisible: ((route) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
                    return routeName !== 'ChatScreen';
                })(route),
                headerShown: false,
            })}
            tabBar={(props) => <BottomTabBar {...props} style={{ height: 98 }} />}
        >

            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                        <IconHome fill={focused ? focusedColor : defaultColor} />
                    ),
                    tabBarStyle: {
                        display: getFocusedRouteNameFromRoute(route) === 'ChatScreen' ? 'none' : 'flex',
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: 'bold',
                        marginTop: -20, // Décale le label de 5 pixels vers le bas
                        marginBottom: 20, // Décale le label de 5 pixels vers le bas
                    },
                    tabBarActiveTintColor: 'red', // La couleur du label lorsque l'onglet est sélectionné
                    tabBarInactiveTintColor: 'gray', // La couleur du label lorsque l'onglet n'est pas sélectionné
                })}
            />

            <Tab.Screen name="Profil" component={ProfilStackScreen}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                        <IconProfil fill={focused ? focusedColor : defaultColor} />
                    ),
                    tabBarStyle: {
                        display: getFocusedRouteNameFromRoute(route) === 'Profile' ? 'none' : 'flex',
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: 'bold',
                        marginTop: -20, // Décale le label de 5 pixels vers le bas
                        marginBottom: 20, // Décale le label de 5 pixels vers le bas
                    },
                    tabBarActiveTintColor: 'red', // La couleur du label lorsque l'onglet est sélectionné
                    tabBarInactiveTintColor: 'gray',
                })} />

            <Tab.Screen name="MatchTab" component={MatchStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IconKiess fill={focused ? focusedColor : defaultColor} />
                    ),
                    tabBarLabel: '',
                    
                }}
            />
            <Tab.Screen name="Boutique" component={ShopStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IconBoutique fill={focused ? focusedColor : defaultColor} />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: 'bold',
                        marginTop: -20, // Décale le label de 5 pixels vers le bas
                        marginBottom: 20, // Décale le label de 5 pixels vers le bas
                    },
                    tabBarActiveTintColor: 'red', // La couleur du label lorsque l'onglet est sélectionné
                    tabBarInactiveTintColor: 'gray',
                }} />
            <Tab.Screen name="Réglages" component={SettingsStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IconReglage fill={focused ? focusedColor : defaultColor} />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: 'bold',
                        marginTop: -20, // Décale le label de 5 pixels vers le bas
                        marginBottom: 20, // Décale le label de 5 pixels vers le bas
                    },
                    tabBarActiveTintColor: 'red', // La couleur du label lorsque l'onglet est sélectionné
                    tabBarInactiveTintColor: 'gray',
                }} />
        </Tab.Navigator>
    );
}
