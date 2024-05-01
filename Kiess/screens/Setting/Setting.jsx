import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native';
import Discovery from './Discovery'; 
import PersonalInfo from './PersonalInfo';
import SettingSvg from '../../components/Setting/IconsSetting';
import AmiFamilleSvg from '../../components/Setting/IconsAmiFamille';
import IconsDecouverte from '../../components/Setting/IconsDecouverte';
import IconsVous from '../../components/Setting/IconsVous';
import IconSetting from '../../components/Icons/iconSetting';
import IconSettingOpen from '../../components/Icons/IconSettingOpen';

const settingsOptions = [
  { name: 'Vous', screen: 'PersonalInfo', Component: PersonalInfo, Icon: IconsVous },
  { name: 'Découverte', screen: 'Discovery', Component: Discovery, Icon: IconsDecouverte },
  { name: 'Ami & famille', screen: 'FamilyFriends', Icon: AmiFamilleSvg },
  // For other options without specific icons, we'll use SettingSvg as the default icon
  { name: 'Notifications', screen: 'NotificationsSetting', Icon: SettingSvg },
  { name: 'Restaurer mes achats', screen: 'RestorePurchases', Icon: SettingSvg },
  { name: 'Contact', screen: 'Contact', Icon: SettingSvg },
  { name: 'Communauté', screen: 'Community', Icon: SettingSvg },
  { name: 'Confidentialité', screen: 'Privacy', Icon: SettingSvg },
  { name: 'Mentions légales', screen: 'LegalMentions', Icon: SettingSvg },
];

const renderIcon = (name) => {
  switch(name) {
    case 'Vous':
      return <IconsVous style={styles.icon} />;
    case 'Découverte':
      return <IconsDecouverte style={styles.icon} />;
    case 'Ami & famille':
      return <AmiFamilleSvg style={styles.icon} />
    default:
      return <SettingSvg style={styles.icon} />;
  }
};

const SettingItem = ({ name, Component, isExpanded, onExpand, Icon, index }) => {
  const backgroundColor = index % 2 === 0 ? '#f1f1f1' : 'white';

  return (
    <View style={[styles.itemContainer, { backgroundColor }]}>
      <TouchableOpacity onPress={onExpand} style={styles.item}>
        {renderIcon(name)}
        <Text style={styles.itemText}>{name}</Text>
        {isExpanded ? <IconSettingOpen /> : <IconSetting />}
      </TouchableOpacity>
      {isExpanded && Component && <Component />}
    </View>
  );
};

export default function Settings({ navigation }) {
  const [expandedOption, setExpandedOption] = useState(null);

  const handleExpand = (option) => {
    setExpandedOption(expandedOption === option ? null : option);
  };

  return (
    <ScrollView style={styles.container}
    contentContainerStyle={styles.scrollViewContent}>
      {settingsOptions.map((option, index) => (
        <SettingItem
          key={option.name}
          name={option.name}
          onExpand={() => handleExpand(option)}
          isExpanded={expandedOption === option}
          Component={option.Component}
          index={index} 
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    backgroundColor: 'white',
    
  },
  scrollViewContent: {
    alignItems: 'center', // Centre les enfants horizontalement
    paddingVertical: 10, // Ajoutez un espace vertical si nécessaire
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    width: 360, // Assurez-vous que cette largeur correspond à vos besoins
    alignSelf: 'center', // Centrez le conteneur
    borderRadius: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  icon: {
    marginRight: 10,
    width: 24,  // Adjust based on your SVG size
    height: 24, // Adjust based on your SVG size
    marginRight: 10, // Add some space between the icon and the text
  },
  itemText: {
    fontSize: 16,
    color: '#333333',
    flex: 1, 
    
  },
  additionalInfo: {
    fontSize: 14,
    color: '#666666',
    paddingTop: 5,
  },
});
