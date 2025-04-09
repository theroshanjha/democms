import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './APP/Route/stackScreens';

export default function App() {
  return (
    <NavigationContainer 
    children={<MainStackNavigator></MainStackNavigator>}>
    </NavigationContainer>
  );
}