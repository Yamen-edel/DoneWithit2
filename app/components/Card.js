import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.detailsContainer}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },

  detailsContainer: {
    padding: 20,
  },

  text: {
    marginBottom: 10,
  },
  subTitle: {
    color: "#4ecdc4",
    fontWeight: "bold",
  },
});
