import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './Navigation';

const Drawer = createDrawerNavigator();

export const UserMenuSide = () => {
  return (
    <Drawer.Navigator
        screenOptions={{
            // headerShown: false,
        }}
    >
      <Drawer.Screen name="Feed" component={ StackNavigator } />
    </Drawer.Navigator>
  );
}