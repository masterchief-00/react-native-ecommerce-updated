import { Entypo, AntDesign } from "@expo/vector-icons";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { Center, Pressable, Text } from "native-base";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import StackNavigation from "./StackNavigation";

const Tab = createBottomTabNavigator();
const CustomTab = ({ children, onPress }) => (
  <Pressable
    onPress={onPress}
    _pressed={{
      bg:'black'
    }}
    h={70}
    w={70}
    rounded="full"
    bg="#009580"
    top={-30}
    shadow={2}
  >
    {children}
  </Pressable>
);

export default function BottomNav() {
  return (
    <Tab.Navigator
      backBehavior="Main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={StackNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color="#009580" />
              ) : (
                <AntDesign name="home" size={24} color="#009580" />
              )}
            </Center>
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="shopping-cart" size={24} color="white" />
              ) : (
                <AntDesign name="shoppingcart" size={24} color="#00ffdb" />
              )}
            </Center>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="user" size={24} color="#009580" />
              ) : (
                <AntDesign name="user" size={24} color="#009580" />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: "white",
    height: 50,
  },
});
