import React from 'react'
import { Image,StyleSheet, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30}/>
            </View>
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name = "trash-can-outline" color = "white" size = {35}/>
            </View>

        <Image resizeMode="contain" style={styles.image} source={require("../../app/chair.jpg")}/>
        </View>
        );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: "#000",
        flex:1

    },
    image: {
        width: '100%',
        height:"100%"
    },

    closeIcon: {
        position: 'absolute', // position this copmonent relative to its parent (container)
        top: 40,
        left: 30
    },
    deleteIcon: {
        position: 'absolute', // position this copmonent relative to its parent (container)
        top: 40,
        right: 30
    }
})

//Notes
//we use this property resizeMode="contain" to fit the image perfectly on the screen when it's cut off