import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress = {onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" size={40} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fc5c65",
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
    borderColor: "#ffffff",
    borderWidth: 10,
  },
});

export default NewListingButton;
