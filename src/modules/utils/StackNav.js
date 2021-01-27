import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Products from "../screens/Products";
import ProductDetails from "../screens/ProductDetails";
import ImgaeList from "../screens/ImgaeList";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

function StackNav() {
  const LogoTitle = () => {
    return (
      <Image
        style={{ width: 52, height: 35 }}
        source={require("../../assets/bestbuylogo.png")}
      />
    );
  };

  const LeftBurgerIcon = ({ navigation }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{ marginLeft: 15, width: 25, height: 35 }}
            source={require("../../assets/burgericon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{ marginLeft: 15, width: 35, height: 35 }}
            source={require("../../assets/backicon.png")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const RightIcon = () => {
    return (
      <Image
        style={{ marginRight: 15, width: 35, height: 35 }}
        source={require("../../assets/searchicon.png")}
      />
    );
  };

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => <LeftBurgerIcon navigation={navigation} />,
        headerRight: (props) => <RightIcon {...props} />,
      })}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation, props }) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
        })}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ navigation, props }) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ navigation, props }) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
        })}
      />
      <Stack.Screen
        name="ImgaeList"
        component={ImgaeList}
        options={({ navigation, props }) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
        })}
      />
    </Stack.Navigator>
  );
}

export default StackNav;
