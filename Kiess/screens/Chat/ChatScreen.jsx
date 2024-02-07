import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import tw from 'twrnc';

// Simulate data
const messagesData = [
  { id: '1', text: 'Bonjour Julia!', incoming: true },
  { id: '2', text: 'Salut! Comment vas-tu?', incoming: false },
  // Add more messages here
];

const ChatScreen = ({ route, navigation }) => {
  const [messages, setMessages] = useState(messagesData);
  const [text, setText] = useState('');

  const sendMessage = () => {
    if (text) {
      // Here you would send the message to your backend or chat service
      const newMessage = { id: Date.now().toString(), text: text, incoming: false };
      setMessages([...messages, newMessage]);
      setText('');
    }
  };

  return (
    <View style={tw`flex-1`}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={tw`bg-gray-100 m-2 p-2 rounded-lg ${item.incoming ? 'self-start' : 'self-end'}`}>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        style={tw`flex-1`}
      />
      <View style={tw`flex-direction row items-center p-2 border-t border-gray-200`}>
        <TextInput
          value={text}
          onChangeText={setText}
          style={tw`flex-1 p-2 bg-gray-200 rounded-lg`}
          placeholder="Écrire un message"
        />
        <TouchableOpacity style={tw`ml-2`} onPress={sendMessage}>
          <Text style={tw`text-blue-400`}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
