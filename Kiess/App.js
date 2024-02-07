import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { SafeAreaView } from 'react-navigation';
import MyTabs from './navigation/tabNavigation';
import tw from "twrnc";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <SafeAreaView className="flex-1">
      <NavigationContainer>

      {/* <AppNavigator/> */}
      <MyTabs />
      <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaView>
  );
}

