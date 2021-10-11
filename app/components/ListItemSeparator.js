import React from 'react'
import { View,StyleSheet } from 'react-native'

export default function ListItemSeparator() {
    return (
        <View style = {styles.separator}>
                
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {

        width: '100%',
        height: 1,
        backgroundColor : '#D3D3D3'
    }
})