import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CheckButton = ({ isChecked, onCheck }) => {
  const handleCheck = () => {
    onCheck(!isChecked);
  };

  return (
    <TouchableOpacity
      style={[styles.container, isChecked && styles.checkedContainer]}
      onPress={handleCheck}
    >
      {isChecked ? (
        <MaterialIcons name="check-box" size={24} color="black" />
      ) : (
        <MaterialIcons name="check-box-outline-blank" size={24} color="black" />
      )}
      <Text style={styles.label}>J'ai lu et j'accepte les termes et conditions</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkedContainer: {
    backgroundColor: '#f2f2f2',
  },
  label: {
    marginLeft: 8,
  },
});

export default CheckButton;
