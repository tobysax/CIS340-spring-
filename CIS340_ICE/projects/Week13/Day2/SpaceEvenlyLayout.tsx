// Importing React and the View component from react-native
import React from 'react';
import { View } from 'react-native';

// Main functional component named App
export default function App() {

return (
    <View style ={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly'

    }}>

    {/*First box: red, 50x50 pexels*/}
    <View style={{
        width: 50,
        height: 50,
        backgroundColor: 'red'
    }}/>

    {/*second box: yellow, 50x50 pexels*/}
    <View style={{
        width: 50,
        height: 50,
        backgroundColor: 'yellow'
    }}/>

    {/*third box: green, 50x50 pexels*/}
    <View style={{
        width: 50,
        height: 50,
        backgroundColor: 'green'
    }}/>


    </View>

);
}
