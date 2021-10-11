import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../app/screens/AccountScreen";
import MessagesScreen from "../app/screens/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
  </Stack.Navigator>
);
// this name="" should be used as it's when to use navigation.navigate
export default AccountNavigator;
