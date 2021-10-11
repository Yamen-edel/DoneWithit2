import React from 'react';
import {  StyleSheet,Text, TouchableOpacity } from 'react-native';

function AppButton({title,onPress, color = "#fc5c65"}) {
    return (
        
        <TouchableOpacity style={[styles.button, { backgroundColor: color}]} onPress={onPress}>
            <Text style = {styles.text}>
            {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    button: {
        width: "90%",
        backgroundColor: "#fc5c65",
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 20,
        marginLeft : 20
    },

    text: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight : 'bold'
    }
    
})
export default AppButton;