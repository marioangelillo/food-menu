import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CalendarMenuScreen } from '../screens/CalendarMenuScreen';
import { MenuFoodScreen } from '../screens/MenuFoodScreen';

const Drawer = createDrawerNavigator();

export const UserMenuSide = () => {
  return (
    <Drawer.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
      <Drawer.Screen name="StackNavigator" component={ CalendarMenuScreen } />
      <Drawer.Screen name="MenuFoodScreen" component={ MenuFoodScreen } />
    </Drawer.Navigator>
  );
}