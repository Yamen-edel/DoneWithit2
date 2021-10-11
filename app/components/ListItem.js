import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TouchableHighlight,
  Platform,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItem({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  //1.0
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight // this is to hilight on the item in the list
        underlayColor={"#f2f2f2"}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}

          <View style={styles.detailsContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            {subTitle && (
              <Text numberOfLines={2} style={styles.subTitle}>
                {subTitle}{" "}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons // render a component
            name="chevron-right"
            color="grey"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // because SafeAreaView doesn't work on android, we apply this logic which says the value of the paddingTop is equal the statusBar height otherwise set it to 0
    backgroundColor: "#ffffff",
    alignItems: "center",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },

  title: {
    fontWeight: "600",
    justifyContent: "flex-start",
  },
  detailsContainer: {
    justifyContent: "center",
    paddingLeft: 5,
    flex: 1,
  },
  subTitle: {
    color: "#6e6969",
  },
});

// notes:
//1.0 : because we want to use this resuable component somewhere that there is no image but an icon, and because this icon holds 4 props and it would make our code look a bit convoluted to add them in so we're adding a single extra prop instead (ImageComponent)
// {image && <Image style={styles.image} source={image} />}  // basic conditional rendering technique. we wrapped this in braces and added (image &&) to check if there is an image then leave some space for it, if not then don't
