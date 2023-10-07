import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JoinClubComponenet from './joinclub';
import ModuleScreen from './modules';
import LessonScreen from './lesson';
import PostPage from './form';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={JoinClubComponenet} />
        <Stack.Screen name="Modules" component={ModuleScreen} />
        <Stack.Screen name="Lesson" component={LessonScreen} />
        <Stack.Screen name="PostPage" component={PostPage} />

      </Stack.Navigator>
      
    </NavigationContainer>
  );

}

export default App;