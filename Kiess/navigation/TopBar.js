import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import tw from 'twrnc';

const TopBar = ({ goBack, logoSource, rightButtonSource }) => {
    logoSource =require('../assets/Group.png')
    rightButtonSource =require('../assets/Juliette.png')
    return (
        <View style={tw`flex-row items-center justify-around w-100 pb-4 pt-10 bg-white `}>
            <TouchableOpacity onPress={goBack}>
                <Text style={tw`text-2xl`}>{"<"}</Text>
            </TouchableOpacity>

            <Image
                source={logoSource} // Remplacez par le chemin de votre logo
                style={tw`w-20 h-10`}
            />

            <TouchableOpacity>
                <View style={tw`bg-red-500 w-10 h-10 rounded-full`}>
                    <Image
                        source={rightButtonSource} // Remplacez par le chemin de votre image pour le bouton rond
                        style={tw`w-6 h-6`}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default TopBar;
