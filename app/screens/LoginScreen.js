import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import * as Yup from "yup"; //2
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  const [email, setEmail] = useState(); //1
  const [password, setPassword] = useState(); //1
  return (
    <View>
      <Image style={styles.logo} source={require("../../app/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)} // this fucntion will get called when submitted
        validationSchema={validationSchema}
      >
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

        <SubmitButton title="Login" />
      </AppForm>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
});

//notes
//1 : (replaced with Formik) if we have mutiple inputs then we would have more state variables, therefore our code will be a bit complex so here where *Formik* kicks in. keeps track of form states and gives us validation
//2 Yup is used for validation
