import React from "react";
import { TextInput, View, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DefaultStyles from "./DefaultStyles";
export default function AppTextInput({ icon, width = '90%', color = '#ffe5e3', ...otherProps }) {
  // rather than including every signle prop for the textInput, we do in this way
  return (
    <View style={[DefaultStyles.container ,{backgroundColor: color},{width}]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          style={{ marginRight: 10, marginVertical: 4 }}
        />
      )}
      <TextInput style={DefaultStyles.text} {...otherProps} />
    </View>
  );
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: '#ffe5e3', // #ffe5e3
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        marginLeft : 20,
    }
});
