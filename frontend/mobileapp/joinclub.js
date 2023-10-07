import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const JoinClubComponent = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [town, setTown] = useState("");

  const onSubmit = async () => {
    const params = { location: town };
    const res = await axios.get("http://localhost:3000/club", { params: params });
    console.log(res.data);
    navigation.navigate('SearchResults', {"response": res.data, "name": name, "phoneNumber": phoneNumber});
};


  return (
    <View style={styles.container}>
      <Text>Join a Club</Text>
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
      />

      <Button
        title="Go to Modules"
        onPress={() => navigation.navigate('Modules')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Add your styles for the container here
  },
  input: {
    // Add your styles for the input fields here
  }
});

export default JoinClubComponent;
