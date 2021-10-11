import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();
  return (
    <ScrollView
      ref={scrollView}
      horizontal={true}
      onContentSizeChange={() => scrollView.current.scrollToEnd()} // this is to scroll the view to right when adding a new image
    >
      <View style={styles.container}>
        {/** map the imageUris array to bunch of image components  */}
        {imageUris.map((uri) => (
          <View key={uri} style={styles.image}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        {/**handling adding a new image, also local state variables are not maintained here but we are raising events (i.e. onAddImage) , so declaring the state variables would be by the consumer of this component i.e. App.js  */}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
        flexDirection: "row",
        marginLeft : 20

  },
  image: {
      marginRight: 10,
  },
});

export default ImageInputList;
