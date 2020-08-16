import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, TextInput } from 'react-native';



const Navbar = ({text}) => {

    return (<>
        <View style={styles.navbar}>
            <Text>{text}</Text>
        </View>
    </>)

}

const styles = StyleSheet.create({
    navbar:{
       
        backgroundColor:'blue',
        height:10,
        width:'100%',
        padding:25

    }
}) 
export default Navbar