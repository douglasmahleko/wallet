import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './src/screens/signUp';
import { theme } from './src/constants/themes';
import BottomTab from './src/navigation/tabs';

const Stack = createStackNavigator()

export default function App() {
  
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.lime} barStyle={'dark-content'}  />
      <Stack.Navigator
        screenOptions={{
          headerShown : false
        }}
      >
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
