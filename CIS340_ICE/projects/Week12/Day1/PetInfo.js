// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//defining a fuctional component named MyApp
export default function MyApp(){
//create constant
const pet = "Cat";

//returning the UI layout of this component
return(
//view act like a container for layout and frouping t=other components
<View style = {styles.container}>
    {/*Text component used to display the first message*/}
    <Text style = {styles.text}>
        Hello, I am a student in CIS340!
    </Text>

     {/*Text component that displays a dynamic messafe using the 'pet' variable*/}
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
    padding: 16,
    },

    text: {
        fontSize: 18,
        marginBottom: 10,
    }

});