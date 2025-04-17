import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

const dog = {
  uri: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/master/images/dog2.png',
  width: 64,
  height: 64
}

const MyScrollViewApp = () => (

  <ScrollView style = {{padding:40}}>
    <Text style={{fontSize: 80}}> Try to scroll down </Text>
    <Image source={require('../../../assets/dog2.png')}style={{width: 80, height: 80}}/>
    <Image source = {dog}/>
    <Image source = {dog}/>
    <Image source = {dog}/>
    <Image source = {dog}/>
    <Image source = {dog}/>
    <Image source = {dog}/>
    <Image source = {dog}/>
    <Image source = {dog}/>
    <Text style={{fontSize: 80}}> Try to scroll again, if you like </Text>


  </ScrollView>

);
 

export default MyScrollViewApp;
