import React from 'react'
import { View,StyleSheet, TouchableWithoutFeedback } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
export default function ListItemDeleteAction({onPress}) { // passing a function
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.delete}>
            <MaterialCommunityIcons // render a component
                name="trash-can"
                color="white"
                size = {35}
            />
            </View>
            </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    delete: {
        backgroundColor: '#ff5252',
        width: 70,
        justifyContent: "center",
        alignItems : "center"

    }
})
