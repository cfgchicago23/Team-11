import * as React from 'react';
import Lesson from './fackJason';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JoinClubComponenet from './joinclub';
import ModuleScreen from './modules';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={JoinClubComponenet} />
        <Stack.Screen name="Modules" component={ModuleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;