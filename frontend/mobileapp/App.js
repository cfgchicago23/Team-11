import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';


export default function App() {

  const[name , setName]= useState("");
  const[phoneNumber , setPhone] = useState("");
  const[town, setTown] = useState("");

  return <>
 
    <View style={styles.container}>
      <Text>Join a Club</Text>
        <TextInput
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={'Name'}
          style={styles.input}
        />

        <TextInput
          value={phoneNumber}
          onChange={(event) => setPhone(event.target.value)}
          placeholder={'Phone number'}
          style={styles.input}
        />

        <TextInput
          value={town}
          onChange={(event) => setTown(event.target.value)}
          placeholder={'Town name'}
          style={styles.input}
        />

        {/* <Button
          title={'Submit'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        /> */}
    </View>

    </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

