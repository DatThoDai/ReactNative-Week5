import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneDisplay from './PhoneDisplay'; 
import ColorSelection from './ColorSelection'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="PhoneDisplay" component={PhoneDisplay}/>
        <Stack.Screen name="ColorSelection" component={ColorSelection}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
