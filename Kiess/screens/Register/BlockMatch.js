import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import styles from './styleRegister';
import { SafeAreaView } from 'react-navigation';
import { Stack, useRouter } from 'expo-router';
import Nextbutton from '../../components/Nextbutton';
import CheckButton from '../../components/CheckButton';

export default function BlockMatch({ navigation }) {
    const [isCheckButtonChecked, setIsCheckButtonChecked] = useState(false);

    const handleNext = () => {

        navigation.navigate('Mail');

    };

    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />
            </View>

            <Text style={styles.textTitleG}>Pour éviter de matcher avec vos contacts proches, bloquer les sur l’appli</Text>

            <Nextbutton
                onPress={handleNext}
            />


        </SafeAreaView>
    );
}
