// Importing React and required components from react-native
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

function MyApp({ studentName }){
    return(
        <View style = {styles.card}>

            <Text style = {styles.text}>
                Hello, I am {studentName}, a student in CIS340!
            </Text>


        </View>
    );
}

export default function MultiComp(){
    return(
    <View style = {styles.container}>
        <MyApp studentName = "Toby"/>
        <MyApp studentName = "Kat"/>
        <MyApp studentName = "Gabi"/>
        <MyApp studentName = "Mary"/>

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
    },

    title:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    card: {
        padding: 15,
        margin: 10,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadiu:4,
    }

});
