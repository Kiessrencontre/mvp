import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import IconBack from '../../components/Icons/IconBack';
import IconKiessCustom from '../../components/Icons/IconKiessName';
// import IconMenuDots from '../components/IconMenuDots'; // Votre icône pour les 3 petits points

const CustomTopBarNotification = ({ navigation }) => {


  const logoSource = require('../../assets/Group.png');
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  return (
    <View style={tw`flex-row items-center  w-full bg-white pt-10 pb-4`}>
      {/* Section gauche */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`w-1/3 justify-center items-start px-4`}>
        <IconBack />
      </TouchableOpacity>

      {/* Section centrale */}
      <View style={tw`w-1/3 justify-center items-start`}>
        {/* <Image
                    source={logoSource}
                    resizeMode="contain"
                    style={tw`w-20 h-10`}
                /> */}
        <Text style={tw`text-xl font-bold mb-4`}>Notifications</Text>


      </View>

      {/* Section droite */}

    </View>
  );
};

export default CustomTopBarNotification;
