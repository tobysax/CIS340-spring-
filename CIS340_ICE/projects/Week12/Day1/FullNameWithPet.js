// Import React and necessary components from React Native
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//funtion to concatenat full name
function getFullName(fName, mName, lName){
    return `${fName}${mName}${lName}`;
}

//defining a fuctional component named MyApp
export default function MyApp({pet = "Kitty Cat"}){
    return(
        <View style = {styles.container}>

        {/* Greeting Message*/}    
        <Text style = {styles.text}>
        Hello, I am a student in CIS340!
        </Text>

        {/*Displaying full name*/}
        <Text style = {styles.text}>
        My full name is {getFullName("Toby", "Anais-Helena", "Sax")}
        </Text>

        {/*Displaying pet*/}
        <Text style = {styles.text}>
        I have a {pet}!
        </Text>



        </View>
    );
}

//Creating a StyleSheet object to define and reuse styles
const styles = StyleSheet.create({

    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#dbfff7'
    },

    text: {
        fontSize: 18,
        color: '#004a3a',
        marginBottom: 10,
    }

});