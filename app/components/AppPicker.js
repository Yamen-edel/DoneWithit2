import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  PickerIOSItem,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DefaultStyles from "./DefaultStyles";
import PickerItem from "./PickerItem";
// lists the items vertically
export default function AppPicker({
  icon,
  placeholder,
  items,
  selectedItem,
  numberOfColumns = 1,
  onSelectItem,
  width = "90%",
  PickerItemComponent = PickerItem, // this is a commponent so we naming conventions is to start with CapitalLetter. If we don't specify this component then enable PickerItem instead(vertical list of items)
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false); // initilise the state variable to false
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              style={{ marginRight: 10 }}
            />
          )}
          {selectedItem ? ( // if an item exits set the text to be this one below
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            // if placeholder is enabled then the style is like below
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}

          <MaterialCommunityIcons name="chevron-down" size={25} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          numColumns={numberOfColumns} // this prop to make items horizontally
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent //colourfull icons
              item={item}
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
             
                
              
            />
          )}
        />
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: "#0c0c0c",
    fontFamily: "Roboto",
  },
  placeholder: {
    flex: 1,
    color: "#999999",
    fontSize: 18,
  },
});

//notes
// Modal : it's the dropdown list, when visible prop is true it will be displayed - otherwise not
//{selectedItem ? selectedItem.label : placeholder} : if selected item is defined then display it, otherwise display placeholder
