import React from 'react'
import { Text, TouchableOpacity,StyleSheet } from 'react-native'

export default function PickerItem({onPress,item}) {
    return (
        <TouchableOpacity onPress = {onPress}>
        <Text style ={styles.text}>
            {item.label}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        padding: 10,
        marginLeft: 5,

        
    }
})
