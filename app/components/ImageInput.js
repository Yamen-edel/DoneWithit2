import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  // This function will get executed only once when our components gets rendered; because we're passing an empty array, therefore it's not dependant to any variables. (useEffect) is equivelant to ComponentDidmount().

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const handlePress = () => {
    // on pressing the image icon, if there is no image already then select from library
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        {
          text: "No",
        },
      ]);
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // this prop is to only allow picture not videos for example
        quality: 0.5,
      });

      if (!result.cancelled) onChangeImage(result.uri); // if the user doesn't cancel selecting the image
      console.log("hey");
    } catch (error) {
      console.log("Error reading an image");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && ( // (conditional rendering) if there is no image selected, then display the icon
          <MaterialCommunityIcons color={"#787878"} name="camera" size={40} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden", // we do this to get the round corners, we lost them when the image is slightly bigger than the size of the container - so we apply this to fix that
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
