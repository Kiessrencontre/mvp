import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { SafeAreaView } from 'react-navigation';
import MyTabs from './navigation/tabNavigation';
import tw from "twrnc";


export default function App() {

  return (
    <SafeAreaView className="flex-1">

      {/* <AppNavigator/> */}
      <MyTabs/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
