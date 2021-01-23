import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Products from '../screens/Products';
import ProductDetails from '../screens/ProductDetails';
import ImgaeList from '../screens/ImgaeList';

const Stack = createStackNavigator();

function Navigation() {
  const LogoTitle = () => {
    return (
      <Image
        style={{width: 52, height: 35}}
        source={require('../../assets/bestbuylogo.png')}
      />
    );
  };

  const LeftBurgerIcon = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{marginLeft: 15, width: 25, height: 35}}
          source={require('../../assets/burgericon.png')}
        />
        <Image
          style={{marginLeft: 15, width: 35, height: 35}}
          source={require('../../assets/backicon.png')}
        />
      </View>
    );
  };

  const RightIcon = () => {
    return (
      <Image
        style={{marginRight: 15, width: 35, height: 35}}
        source={require('../../assets/searchicon.png')}
      />
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation, props}) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
            // headerLeft: (props) => <LeftBurgerIcon {...props} />,
            // headerRight: (props) => <RightIcon {...props} />,
          })}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={({navigation, props}) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: (props) => <LeftBurgerIcon {...props} />,
            headerRight: (props) => <RightIcon {...props} />,
          })}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={({navigation, props}) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: (props) => <LeftBurgerIcon {...props} />,
            headerRight: (props) => <RightIcon {...props} />,
          })}
        />
        <Stack.Screen
          name="ImgaeList"
          component={ImgaeList}
          options={({navigation, props}) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: (props) => <LeftBurgerIcon {...props} />,
            headerRight: (props) => <RightIcon {...props} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
