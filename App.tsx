import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/Navigation';
import { UserMenuSide } from './src/navigation/UserMenuSide';

const App = () => {
  return (
    <NavigationContainer>
      <UserMenuSide />
    </NavigationContainer>
  )
}

export default App;