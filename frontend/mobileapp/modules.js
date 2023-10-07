import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ModuleScreen = () => {
  const data = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ];
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {data.map((item, index) => (
        <View style={styles.buttonStyle}>
        <Button
          title = {item}
          onPress={() => console.log('Button 1 pressed!')}
        />
        </View>
      ))}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },

  buttonStyle: {
    width: 200, // Set your desired width here
    marginBottom: 10, // Optional: Add a margin at the bottom for spacing between buttons
  },
});

export default ModuleScreen;