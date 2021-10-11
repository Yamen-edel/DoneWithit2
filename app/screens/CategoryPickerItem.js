import React from "react";
import { View, StyleSheet, Text,TouchableOpacity} from "react-native";
import Icon from "../components/Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress = {onPress}>

    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <Text style={styles.label}>{item.label}</Text>
      </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    marginTop: 5,
  },
});

export default CategoryPickerItem;
