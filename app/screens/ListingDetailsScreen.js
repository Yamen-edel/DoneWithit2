import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params; //this is to identify the listing we're selecting
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailContainer}>
        <Text style={styles.text}>{listing.title}</Text>
        <Text style={styles.price}>£{listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../app/mosh.jpg")}
            title="Mosh Jamedni"
            subTitle=" 5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  text: {
    color: "#fc5c65",
    fontSize: 24,
    fontWeight: "bold",
  },

  price: {
    color: "#4ecdc4",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 5, //if two components are close, we do that to seperate them a bit
  },

  detailContainer: {
    padding: 20,
  },

  userContainer: {
    marginVertical: 40,
  },
});
