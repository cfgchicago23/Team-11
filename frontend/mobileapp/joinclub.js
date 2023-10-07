import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const JoinClubComponenet = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [town, setTown] = useState("");

  const onSubmit = () => {
    // Handle the form submission here
    // Make request to mongo
    console.log(name, phoneNumber, town);
  };

  return (
    <View style={styles.container}>
      <Text>Join a Club</Text>
      <TextInput
        value={name}
        onChange={(event) => setName(event.nativeEvent.text)}
        placeholder={'Name'}
        style={styles.input}
      />

      <TextInput
        value={phoneNumber}
        onChange={(event) => setPhone(event.nativeEvent.text)}
        placeholder={'Phone number'}
        style={styles.input}
      />

      <TextInput
        value={town}
        onChange={(event) => setTown(event.nativeEvent.text)}
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

export default JoinClubComponenet;
