import React from "react";
import { View, StyleSheet } from "react-native";
import ErrorMessage from "./ErrorMessage";
import ImageInputList from "./ImageInputList";
import { useFormikContext } from "formik";
function FormImagePicker({ name }) {
  const { setFieldValue, values, errors, touched } = useFormikContext(); // we using this (useFormikContext) to get these objects within braces
  const imageUris = values[name];

    const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const hanldeRemove = (uri) => {
    //imageUris is our original array
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    ); // get all the uris except the one we're selecting using filter with (imageUri) function
    //we no longer need (setImageUris) because we will use formik to update our states instead.
  };

    return (
      
        <React.Fragment>
            
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={hanldeRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
