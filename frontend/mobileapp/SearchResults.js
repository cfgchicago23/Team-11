
import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SearchResults = ({ route }) => {

  const { results, name , phoneNumber} = route.params;

    const requestClub = async () => {
      const resp = await axios.put(`/clublead/${results.response.lid}/requests`, [{"name": name, "phoneNumber": phoneNumber}]);
      console.log(resp);
    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {resuls.map((item, index) => (
        <View style={styles.buttonStyle}>
          <Text style={styles.title}>
                  {item.title}
                </Text>
          <Button
            title = "Request to join"
            onPress={() => requestClub()}
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
    width: 400, 
    marginBottom: 10, 
  },
});

export default SearchResults