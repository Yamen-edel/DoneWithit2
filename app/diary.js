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
export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [imageUri, setImageUri] = useState();
  const [imageUris, setImageUris] = useState([]);

  // 1 const categories = [
  //   { label: "Furniture", value: 1 },
  //   { label: "Clothing", value: 2 },
  //   { label: "Cameras", value: 3 }

  // ]
  // const [category, setCategory] = useState(categories[0]);

  //// taking a copy of the original array and add the new uri (image) to the end
  
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  }

  const hanldeRemove = (uri) => {
    //imageUris is our original array
    setImageUris(imageUris.filter(imageUri => imageUri !== uri));  // get all the uris except the one we're selecting
  }

  return (
    // <AppPicker
    //   // '1 app picker' props
    //   selectedItem={category}
    //   onSelectItem={item =>setCategory(item)}
    //   placeholder="Category"
    //   icon="apps"
    //   items = {categories}
    // />
    // <AppTextInput placeholder="Email"
    // icon = "email"
    // />
    <View style={styles.container}>
      {/** <ImageInput imageUri={imageUri}
      onChangeImage={uri =>setImageUri(uri)}
      />*/}

      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={hanldeRemove} //passing a function
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "dodgerblue",
    // width: 100,
    // height: 100,
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// <View style={{
//   backgroundColor: "dodgerblue",
//   width: 100,
//   height: 100,
//   padding : 10
// }}>
//   <View style = {{backgroundColor : "gold", width : 50, height : 50}}>
//   </View>

// </View>
// <View style = {{backgroundColor : "tomato", width : 100, height : 100 , margin : 20}}>
// </View>

//alert with customised buttons
// <SafeAreaView style={styles.container}>
//   <Button title="Click Me"
//     onPress={() => Alert.alert('button tapped', 'My Message', [
//       { text: "Yes", onPress: ()=> console.log("Yes")},
//       {text: "No", onPress:()=> console.log("No")}
//     ])} />
// </SafeAreaView>

// logo
// <View>
//   <MaterialCommunityIcons name = "email" size= {200} color="dodgerblue"/>
//   </View>
