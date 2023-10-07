import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

const ModuleScreen = () => {
  const data = [
    { id: '1', text: 'Item 1', image: '' },
    { id: '2', text: 'Item 2', image: '' },
    { id: '3', text: 'Item 3', image: '' },
    { id: '4', text: 'Item 4', image: '' },
    { id: '5', text: 'Item 5', image: '' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item) => (
        <Card key={item.id} containerStyle={styles.cardContainer}>
          <TouchableOpacity onPress={() => console.log(`${item.text} pressed!`)}>
            <Card.Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.text}</Text>
          </TouchableOpacity>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5', // Set your desired background color
    padding: 10,
  },
  cardContainer: {
    width: 200,
    marginBottom: 10,
  },
  cardImage: {
    width: 200,
    height: 150,
  },
  cardText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
});

export default ModuleScreen;
