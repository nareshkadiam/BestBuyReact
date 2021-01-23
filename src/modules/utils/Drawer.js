import React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Cart from '../screens/Cart';
import Stores from '../screens/Stores';
import Home from './Navigation';

function Drawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Stores" component={Stores} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Drawer;
