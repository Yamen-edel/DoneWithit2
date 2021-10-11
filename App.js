// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableHighlight,
  Alret,
  TouchableNativeFeedback,
  TouchableOpacity,
  Button,
  Alert,
  TextInput,
  Switch,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import { Picker } from "@react-native-picker/picker";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigator from "./Navigation/AuthNavigator";
import navigationTheme from "./Navigation/navigationTheme";
import AppNavigator from "./Navigation/AppNavigator";
export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [imageUri, setImageUri] = useState();
  const [imageUris, setImageUris] = useState([]);

  //function component
  const Tweets = ({ navigation }) => (
    <View>
      <Text>Tweet content</Text>
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
    </View>
  );

  const TweetDetails = ({ route }) => (
    <View>
      <Text>Tweet Details {route.params.id}</Text>
    </View>
  );

  const Account = () => (
    <View>
      <Text>Account</Text>
    </View>
  );
  const Stack = createStackNavigator();
  const FeedNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={{
          title: "Tweet Details",
          headerStyle: { backgroundColor: "dodgerblue" },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen name="account" component={Account}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={25} color={color} />
        ),
      }}
      />
    </Tab.Navigator>
  );
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator  />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
