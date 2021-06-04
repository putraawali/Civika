import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/Login";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

export default function LoginStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BottomTabHome"
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}
