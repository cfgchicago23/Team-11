import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  Button,
  SafeAreaView,

  Alert,
} from 'react-native';


async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/test');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export default function App() {
  return (
    <Button
        title="Press me"
        onPress={fetchData()}
      />
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
