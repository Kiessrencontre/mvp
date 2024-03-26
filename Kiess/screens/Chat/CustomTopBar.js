import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import IconBack from '../../components/Icons/IconBack';
// import IconMenuDots from '../components/IconMenuDots'; // Votre icône pour les 3 petits points

const CustomTopBar = ({ navigation, userImage, userName, userPoints }) => {
    
    return (
        <View style={tw`flex-row items-center justify-around w-100 pb-4 pt-10 bg-white `}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IconBack />
            </TouchableOpacity>

            <View style={tw`flex-row items-center`}>
                <Image
                    source={userImage}
                    style={tw`w-10 h-10 rounded-full mr-2`}
                />
                <View style={tw`flex-row`}>
                    <Text style={tw`text-black font-bold`}>{userName}</Text>
                    <Text style={tw`text-gray-400 text-xs`}>{userPoints} pts</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => { /* Votre logique ici */ }}>
                {/* <IconMenuDots /> */}
                <Text>...</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CustomTopBar;
