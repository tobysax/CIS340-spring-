// Import React and React Native components
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';

// Import Expo's ImagePicker and Sharing libraries
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {
  const[selectedImage, setSelectedImage] = useState(null);

  async function openImagePicker(){
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted){
      Alert.alert("Permission required", "You need to alllow access to select images.");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (pickerResult.canceled){
      return;
    }

    let imageUri = pickerResult.assets[0].uri;
    setSelectedImage({localURI: imageUri});
  }

  async function shareImage(){
    if (!selectedImage){
      Alert.alert("No Image", "please pick an image first.");
      return;
    }

    let canShare = await Sharing.isAvailableAsync();
    if (!canShare) {
      Alert.alert("Sharing not supported", "Sharing is not available on this device.");
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }

  return(
    <View style = {styles.container}>

      {selectedImage ? (
        <View style = {{alignItems: 'center' }}>
          <image source={{ uri: selectedImage.localUri}} sytle ={Styles.selectedImage}/>
          <TouchableOpacity onPress = {shareImage} style = {styles.button}>
            <Text style={styles.buttonText}>Share This Photo</Text>
          </TouchableOpacity>
    </View>
  ):(
    <View style = {{alignItems: 'center'}}>
      <Image
      source = {{uri:'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/master/images/dog2.png'}}
      style={styles.logo}
      />
      <Text style = {styles.instructions}>
        Press the button below to select an image from your phone!
      </Text>
      <TouchableOpacity onPress={openImagePicker} style={styles.button}>
        <Text style = {styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>
     </View>
  )};
</View>)}

// Style definitions
const styles = StyleSheet.create({
  container: {
    flex: 1,                     // Take up the full screen
    alignItems: 'center',        // Center items horizontally
    justifyContent: 'center',    // Center items vertically
    backgroundColor: "#FFFFE0",  // Light yellow background
  },
  logo: {
    width: 310,
    height: 300,
    marginBottom: 20,
  },
  selectedImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain', // Keeps image ratio without stretching
    marginBottom: 10,
  },
  instructions: {
    fontSize: 18,
    color: "#87CEFA",           // Light blue text
    textAlign: 'center',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#778899", // Steel blue button
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",           // White text
  },
});
