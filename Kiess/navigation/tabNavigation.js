import React from 'react';
import { createBottomTabNavigator,BottomTabBar  } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStack';
import ProfilStackScreen from './ProfileStack';
import MatchStackScreen from './MatchStack';
import ShopStackScreen from './ShopStack';
import SettingsStackScreen from './SettingsStack';
import IconHome from '../components/IconHome';
import IconProfl from '../components/IconProfil';
import IconKiess from '../components/IconKiess';
import IconBoutique from '../components/IconBoutique';
import IconReglage from '../components/IconReglage';

const Tab = createBottomTabNavigator();
const defaultColor = "#3D3D3D";
const focusedColor = "#FC2D3D";

export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }
        }
            tabBar={(props) => <BottomTabBar {...props} style={{ height: 98 }} />}
            // tabBar={props => <BottomTabBar {...props} />}
            
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
                        <IconProfl fill={focused ? focusedColor : defaultColor} />
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
            <Tab.Screen name="Boutique" component={ShopStackScreen}
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
    );
}
