import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import CustomTopBarNotification from './CustomTopBarNotification';


const notifications = [
  {
    id: '1',
    name: 'Julia',
    type: 'MATCHMAKING',
    message: ' a découvert une case de ta photo de profil! Fais de même',
    timeElapsed: '1 heure',
    logo: require('../../assets/Notifications/Group194.png'), // Remplacez par le chemin d'accès de votre icône
    isRead: false, // Path to the icon/image related to the notification
  },
  {
    id: '2', // Unique identifier for the notification
    type: 'MATCHMAKING', // The category/type of the notification
    name:"Julia ",
    message: 'a découvert une case de ta photo de profil! Fais de même', // Message to display
    timeElapsed: '1 heure', // Time since the notification was sent
    logo: require('../../assets/Notifications/Group194.png'),
    isRead: false, // Path to the icon/image related to the notification
     // Path to the icon/image related to the notification
  }
];
const notificationsAncien = [
  {
    id: '3', // Unique identifier for the notification
    type: 'MATCHMAKING', // The category/type of the notification
    message: 'Julia a découvert une case de ta photo de profil! Fais de même', // Message to display
    timeElapsed: '1 heure', // Time since the notification was sent
    logo: require('../../assets/Notifications/Group194.png'),
    isRead: true, // Path to the icon/image related to the notification
     // Path to the icon/image related to the notification
  },
  {
    id: '4', // Unique identifier for the notification
    type: 'MATCHMAKING', // The category/type of the notification
    message: 'Julia a découvert une case de ta photo de profil! Fais de même', // Message to display
    timeElapsed: '1 heure', // Time since the notification was sent
    logo: require('../../assets/Notifications/Group194.png'),
    isRead: true, // Path to the icon/image related to the notification
     // Path to the icon/image related to the notification
  }
];







const NotificationItem = ({ type, name, message, timeElapsed, logo, isRead, onPress }) => {
  const backgroundColor = isRead ? 'bg-gray-300' : 'bg-pink-200'; // rose si non lu, gris si lu




  return (
    <TouchableOpacity onPress={onPress} style={tw`flex-row items-center h-24 p-3 px-6 ${backgroundColor} mb-2 rounded-lg border border-gray-200`}>
      <Image source={logo} style={tw`w-15 h-15 mr-3`} />
      <View style={tw`flex-1`}>
        <Text style={tw`text-sm font-semibold text-red-600`}>{type}</Text>
        <Text style={tw`text-sm`}>{name}{message}</Text>
        <Text style={tw`text-xs text-gray-500`}>{timeElapsed}</Text>
      </View>
    </TouchableOpacity>
  );
};

const NotificationsScreen = ( {route, navigation }) => {

  const [newNotifications, setNotifications] = useState(notifications);
  const [oldNotifications, setOldNotifications] = useState(notificationsAncien);



  const handleNotificationPress = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
    // Effectuez ici une action, comme naviguer vers une autre écran
  };
  

  const handleOldNotificationPress = (id) => {
    setOldNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
    // Effectuez ici une action pour les anciennes notifications si nécessaire
  };

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <CustomTopBarNotification navigation={navigation}/>
      <ScrollView style={tw`p-4`}>


        <Text style={tw`text-xl font-bold mb-4`}>NOUVEAU</Text>
        
        {/* Render your notifications here */}
        {newNotifications.map((notif) => (
          <NotificationItem
            key={notif.id}
            type={notif.type}
            name={notif.name}
            message={notif.message}
            timeElapsed={notif.timeElapsed}
            logo={notif.logo}
            isRead={notif.isRead}
            onPress={() => handleNotificationPress(notif.id)}
          />
        ))}


      <Text style={tw`text-xl font-bold mb-4`}>ANCIEN</Text>
      {/* Render your notifications here */}
      {notificationsAncien.map((notif) => (
                <NotificationItem
                key={notif.id}
                type={notif.type}
                name={notif.name}
                message={notif.message}
                timeElapsed={notif.timeElapsed}
                logo={notif.logo}
                isRead={notif.isRead}
                onPress={() => handleOldNotificationPress(notif.id)}
              />
              ))}

        {/* ... Other components for other notification types ... */}
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;
