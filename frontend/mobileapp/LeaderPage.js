
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LeaderPage = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Forums"
            onPress={() => navigation.navigate('PostPage')}
            style={styles.button}
          />
          <Button
            title="Make a Club"
            onPress={() => navigation.navigate('MakeClub')}
            style={styles.button}            
          />
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
    width: 400, 
    marginBottom: 10, 
  },
});

export default LeaderPage