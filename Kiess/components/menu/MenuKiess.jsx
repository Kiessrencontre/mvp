import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const MenuKiess = ({ activeTab, onChangeTab }) => {
  const tabs = ['parametre', 'home', 'profil', 'matche', 'boutique'];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => onChangeTab(tab)}
        >
          <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderTopWidth: 1,
    borderColor: '#CCCCCC',
    paddingBottom: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    backgroundColor: '#FFD700',
    borderRadius: 5,
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  activeTabText: {
    color: '#FFF',
  },
});

export default MenuKiess;
