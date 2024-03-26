import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import IconBack from '../../components/Icons/IconBack';
import IconKiessCustom from '../../components/Icons/IconKiessName';
import IconMenuDots from '../../components/Icons/Icon3Points'; // Votre icône pour les 3 petits points

const CustomTopBarDiscover = ({ navigation }) => {


  const logoSource = require('../../assets/Group.png');
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  return (
    <View style={tw`flex-row items-center justify-between w-full bg-white pt-10 pb-4`}>
      {/* Section gauche */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`w-1/3 justify-center items-start px-4`}>
        <IconBack />
      </TouchableOpacity>

      {/* Section centrale */}
      <View style={tw`w-1/3 justify-center items-center`}>
        {/* <Image
                    source={logoSource}
                    resizeMode="contain"
                    style={tw`w-20 h-10`}
                /> */}
        <IconKiessCustom />

      </View>

      {/* Section droite */}
      <View style={tw`w-1/3 justify-center items-end px-5`}>
        <TouchableOpacity onPress={openModal} style={tw`w-full justify-center items-end`}>
          {/* <Text style={tw`text-xl`}>...</Text> */}
          <IconMenuDots />
        </TouchableOpacity>
        <Modal

          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        // style={tw`bg-slate-400`}
        >
          <TouchableOpacity style={tw`flex-1   justify-start items-end`} onPress={closeModal}>
            <View style={tw`m-12 bg-slate-100 rounded-xl px-6 py-2`}>
              <TouchableOpacity style={tw`p-2 text-base`}>
                <Text style={tw`text-center`}>Retirer Slot</Text>
              </TouchableOpacity>
              <View style={tw`h-px bg-gray-300 `} />
              <TouchableOpacity style={tw`p-2 text-base`}>
                <Text style={tw`text-center`}>Sourdine</Text>
              </TouchableOpacity>
              <View style={tw`h-px bg-gray-300 `} />
              <TouchableOpacity
                style={tw`p-2 text-base`}
                onPress={() => {
                  // Ferme le modal avant de naviguer
                  closeModal();
                  // Navigue vers la page de signalement
                  navigation.navigate('ReportPage', { userName: 'Julia' }); // Ajoutez d'autres paramètres si nécessaire
                }}
              >
                <Text style={tw`text-center text-red-500`}>Signaler</Text>
              </TouchableOpacity>
              <View style={tw`h-px bg-gray-300 `} />
              <TouchableOpacity style={tw`p-2 text-base`}>
                <Text style={tw`text-center text-red-500`}>Bloquer</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
};

export default CustomTopBarDiscover;
