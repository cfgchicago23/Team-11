import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const MakeClub = ({ navigation }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const onSubmit = async () => {
    await axios.post(`http://localhost:3000/club`, {
        uid: Math.random(0,10000),
        name: name,
        location: location,
        lid: Math.random(0,10000),
        members: []
      });
      
      navigation.navigate('PostPage');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Virtual Club</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder={'Name'}
        style={styles.input}
      />

      <TextInput
        value={location}
        onChangeText={setLocation}
        placeholder={'Town'}
        style={styles.input}
      />

      <Button
        title={'Submit'}
        onPress={onSubmit}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 10,
    width: '100%',
  },
  button: {
    marginTop: 10,
  },
});

export default MakeClub;