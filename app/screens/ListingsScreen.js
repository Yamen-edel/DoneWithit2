import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Button,
  Text,
  ActivityIndicator,
} from "react-native";
import Card from "../components/Card";
import listingsApi from "../api/listings";
import AppButton from "../components/AppButton";
import ActivityIndi from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
// const list = [
//   {
//     id: 1,
//     title: "red jacket",
//     price: 100,
//     image: require("../../app/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 100,
//     image: require("../../app/couch.jpg"),
//   },
// ];
export default function ListingsScreen({ navigation }) {
  //const {data : listings,error,loading,request:loadListings} = useApi(listingsApi.getListings); // we could use this hook if we only have to call a single API
  const getListingsApi = useApi(listingsApi.getListings); // we use this pattern if we have to call more than an API in this screen, because we cannot create two state variables called error / loading

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <View style={styles.screen}>
      {getListingsApi.error && (
        <React.Fragment>
          <Text>Couldn't retreive the listings.</Text>
          <AppButton title="Retry" onPress={getListingsApi.request} />
        </React.Fragment>
      )}
      <ActivityIndicator
        size="large"
        visible={getListingsApi.loading}
        color="#999999"
      />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()} // FlatList expects a string as a unique identifier
        renderItem={({ item }) => (
          <Card
            imageUrl={item.images[0].url}
            title={item.title}
            subTitle={"£" + item.price}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginVertical: 30,

    padding: 15,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // because SafeAreaView doesn't work on android, we apply this logic which says the value of the paddingTop is equal the statusBar height otherwise set it to 0
  },
});
