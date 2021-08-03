import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CalendarMenuScreen } from '../screens/CalendarMenuScreen';
import { MenuFoodScreen } from '../screens/MenuFoodScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
      <Stack.Screen name="CalendarMenuScreen" component={ CalendarMenuScreen } />
      <Stack.Screen name="MenuFoodScreen" component={ MenuFoodScreen } />
    </Stack.Navigator>
  );
}