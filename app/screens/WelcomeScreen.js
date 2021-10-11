//rfc
import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../../app/components/AppButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../../app/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../app/logo-red.png")} />
        <Text style={styles.logoText}> Sell What You Don't Need </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />

        <AppButton
          color="#4ecdc4"
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}
//rnss
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end", // change directions in y
    alignItems: "center", // change directions in x
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },

  // RegBtnContainer: {
  //     width: '100%',
  //     padding : 20
  // },

  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  logoText: {
    position: "absolute",
    top: 180,
    fontSize: 22,
    fontWeight: "bold",
  },
});

//Notes:
//we use self-closing syntax when we don't want to put anything inside i.e.(Logo)
