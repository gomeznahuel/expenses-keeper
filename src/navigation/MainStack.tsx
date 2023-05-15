import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList } from "../types/navigate.types";
import { History, HomeScreen, Installments, LoginScreen, SettingsScreen, SignUpScreen } from "../screens";

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Installments" component={Installments} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
