import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import tw from 'twrnc';
import IconBack from '../components/Icons/IconBack';
import IconKiess from '../components/Icons/IconKiessName';

const TopBar = ({ goBack }) => {
    const logoSource = require('../assets/Group.png'); // Logo
    const rightButtonSource = require('../assets/Juliette.png'); // Bouton droit

    return (
        <View style={tw`flex-row items-center justify-between w-full bg-white pt-10 pb-4`}>
            {/* Section gauche */}
            <TouchableOpacity onPress={goBack} style={tw`w-1/3 justify-center items-start px-4`}>
                <IconBack />
            </TouchableOpacity>

            {/* Section centrale */}
            <View style={tw`w-1/3 justify-center items-center`}>
                {/* <Image
                    source={logoSource}
                    resizeMode="contain"
                    style={tw`w-20 h-10`}
                /> */}
                <IconKiess />
            </View>

            {/* Section droite */}
            <View style={tw`w-1/3 justify-center items-end px-5`}>
                <TouchableOpacity onPress={() => { /* Votre logique ici */ }}>
                    <Image
                        source={rightButtonSource}
                        style={tw`w-10 h-10`}
                    />
                    {/* Utilisez Text ou autre composant si nécessaire */}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TopBar;
