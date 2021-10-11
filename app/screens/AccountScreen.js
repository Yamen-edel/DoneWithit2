import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "red",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "green",
    },
    targetScreen: "MessagesScreen",
  },
];
export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ListItem
        title="Yamen Edel"
        subTitle="Programmingwithyamen@gmail.com"
        image={require("../../app/mosh.jpg")}
      />
      <View style={{ marginVertical: 30 }}>
        <FlatList
          ItemSeparatorComponent={ListItemSeparator}
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>

      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    backgroundColor: "#ededed",
    flex: 1,
  },
});
