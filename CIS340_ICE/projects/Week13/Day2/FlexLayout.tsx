// Importing React and the View component from react-native
import React from 'react';
import { View } from 'react-native';

// Main functional component named App
export default function App() {

    return (

     <View style ={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'

    }}>

    <View style={{width: 50, height:50, backgroundColor: "Blue"}}/>
    <View style={{width: 50, height:50, backgroundColor: "DarkGreen"}}/>
    <View style={{width: 50, height:50, backgroundColor: "DarkMagenta"}}/>


    </View>
    );

}
