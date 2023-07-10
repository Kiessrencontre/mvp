import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import styles from './block1';
import { SafeAreaView } from 'react-navigation';
import { Stack, useRouter } from 'expo-router';


export default function WelcomeKiess({ navigation }) {



    return (
        <SafeAreaView style={styles.container}>

            <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />

            <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />


            <Button
                title="goHome" onPress={() => navigation.navigate('Home')} // Utilisez cette ligne pour retourner en arrière
            />

        </SafeAreaView>
    );
}


// {/* <View style={styles.imageContainer}>
//                 {/* <Button
//                     title="Retour"
//                     onPress={() => navigation.goBack()} // Utilisez cette ligne pour retourner en arrière
//                 /> */}
//                 <Image source={require('../../assets/Rose.png')} style={styles.logoKiess} />
//             </View>

//             <Text style={styles.text}>DÉCOUVREZ QUI VOUS RENCONTREZ</Text>

//             <View style={styles.view}>
//                 <TouchableOpacity style={styles.button}>
//                     <Image source={require('../../assets/Apple_logo_white.png')} style={styles.logo} />
//                     <View style={styles.textContainer}>
//                         <Text style={styles.buttonText}>Se connecter avec Applee</Text>
//                     </View>
//                 </TouchableOpacity>

//                 <Text style={styles.text14}>Problèmes de connexion ?</Text>

//                 <Button
//                     title="Retour"
//                     onPress={() => navigation.goBack()} // Utilisez cette ligne pour retourner en arrière
//                 />

//                 <Text style={styles.text11}>
//                     En appuyant sur Connexion, vous acceptez nos Conditions générales. Pour en savoir plus sur l’utilisation de vos données, consultez notre Politique de confidentialités et notre Politique en matière de Cookies.
//                 </Text>
//             </View> */}