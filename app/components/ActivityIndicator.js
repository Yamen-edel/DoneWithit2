import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return <LottieView autoplay loop source={require("../animation/loader")} />;
}

const styles = StyleSheet.create({
  container: {},
});

export default ActivityIndicator;
