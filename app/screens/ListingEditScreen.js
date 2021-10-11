import React, { useState,useEffect } from "react";
import { View, StyleSheet, StatusBar, Platform } from "react-native";
import AppForm from "../components/AppForm";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";
import AppPicker from "../components/AppPicker";
import SubmitButton from "../components/SubmitButton";
import AppFormPicker from "../components/AppFormPicker";
import CategoryPickerItem from "./CategoryPickerItem";
import FormImagePicker from "../components/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  { label: "Camera", value: 3, backgroundColor: "#fed330", icon: "camera" },
  { label: "Cars", value: 4, backgroundColor: "#fd9644", icon: "car" },
  { label: "Games", value: 5, backgroundColor: "#26de81", icon: "cards" },
  { label: "Sports", value: 6, backgroundColor: "#45aaf2", icon: "basketball" },
  { label: "Games", value: 7, backgroundColor: "#4b7bec", icon: "headphones" },
];

export default function ListingEditScreen() {
  const location = useLocation();

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)} // this fucntion will get called when submitted
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField
          maxLength={255}
          placeholder="Title"
          name="title"
          color="#f0f0f0"
        />

        <AppFormField
          autoCapitalize="none"
          maxLength={8}
          keyboardType="numeric"
          placeholder="Price"
          name="price"
          color="#f0f0f0"
          width={120}
        />

        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Description"
          numberOfLines={3} // only works on Android
          name="description"
          color="#f0f0f0" //light grey
        />
        <SubmitButton title="Post" />
      </AppForm>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 30,

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // because SafeAreaView doesn't work on android, we apply this logic which says the value of the paddingTop is equal the statusBar height otherwise set it to 0
  },
});
