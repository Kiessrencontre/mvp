import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import styles from './styleRegister';
import { SafeAreaView } from 'react-navigation';
import { Stack, useRouter } from 'expo-router';
import Nextbutton from '../../components/Nextbutton';

export default function Password({ navigation }) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
    };

    const isPasswordValid = (password) => {
        // Expression régulière pour vérifier la présence d'au moins une majuscule, un chiffre et un caractère spécial
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleNext = () => {
        if (password.trim() !== '' && password === confirmPassword && isPasswordValid(password)) {
            navigation.navigate('ProfilPicture');
        } else {
            // Affiche un message d'erreur ou effectue d'autres actions si nécessaire
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />
            </View>

            <Text style={styles.textTitle}>Choisis ton mot de passe</Text>

            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                placeholderTextColor="#AAAAAA"
                secureTextEntry={true}
                value={password}
                onChangeText={handlePasswordChange}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirme ton mot de passe"
                placeholderTextColor="#AAAAAA"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={handleConfirmPasswordChange}
            />

            {password.trim() !== '' && confirmPassword.trim() !== '' && password !== confirmPassword && (
                <Text style={styles.errorMessage}>Les mots de passe ne correspondent pas.</Text>
            )}

            {!isPasswordValid(password) && password.trim() !== '' && (
                <Text style={styles.errorMessage}>
                    Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.
                </Text>
            )}

            <Nextbutton disabled={password.trim() === '' || password !== confirmPassword || !isPasswordValid(password)} onPress={handleNext} />
        </SafeAreaView>
    );
}
