import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../app/screens/AccountScreen";
import ListingEditScreen from "../app/screens/ListingEditScreen";
import ListingsScreen from "../app/screens/ListingsScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import navigationTheme from "./navigationTheme";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        // we can set options as a function that returns an object to be able to use navigation and navigate to the desired screen
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate("ListingEdit")}
          />
        ),
        // tabBarIcon: ({ color, size }) => (
        //   <MaterialCommunityIcons
        //     name="plus-circle"
        //     color={color}
        //     size={size}
        //   />
        // ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
// this name="" should be used as it's when to use navigation.navigate
export default AppNavigator;
