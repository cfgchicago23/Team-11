import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const JoinClubComponent = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [town, setTown] = useState("");

  const onSubmit = async () => {
    const params = { location: 'jk' };
    const res = await axios.get("http://localhost:3000/club", { params: params });
    console.log(res.data);
    // navigation.navigate
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Looking to join a community?</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder={'Name'}
        style={styles.input}
      />

      <TextInput
        value={phoneNumber}
        onChangeText={setPhone}
        placeholder={'Phone number'}
        style={styles.input}
        keyboardType="numeric"
      />

      <TextInput
        value={town}
        onChangeText={setTown}
        placeholder={'Town name'}
        style={styles.input}
      />

      <Button
        title={'Submit'}
        onPress={onSubmit}
        style={styles.button}
      />
      <hr></hr>
      <Button
        title="Go to Modules"
        onPress={() => navigation.navigate('Modules')}
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

export default JoinClubComponent;