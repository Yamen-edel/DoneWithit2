import React from "react";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import * as Yup from "yup";
import SubmitButton from "../components/SubmitButton";
import AppTextInput from "../components/AppTextInput";
import DefaultStyles from "../components/DefaultStyles";
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={(values) => console.log(values)} // this fucntion will get called when submitted
        validationSchema={validationSchema}
      >
        <AppFormField // /3/ after
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="Name"
          name="name"
          color="#f0f0f0"

        />

        <AppFormField // /3/ after
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          name="email"
          color="#f0f0f0"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
          name="password"
          color="#f0f0f0"
        />

        <SubmitButton title="Register" />
      </AppForm>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // because SafeAreaView doesn't work on android, we apply this logic which says the value of the paddingTop is equal the statusBar height otherwise set it to 0
  },
});
