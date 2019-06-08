import React,{ Component } from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';

// import of my reducers


// Import modules related to Redux
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';



// In App.js, I just need to return my Navigation component. It is inside this component, that my components are rendered.
// I must NOT wrap my Navigation component in a View component since it is not a not a View but only a mecanism of rendering views.
// If you put a View to wrap the component, it will render a white page, with no error.

export default class ScreenShot extends React.Component {
  render() {
    return (
       
        <ScrollView
        contentContainerStyle={{  flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: null,
            height: null,
          }}>
          <Image
            source={require('../assets/screenshot2.jpg',)}
           
                 
            />
      </ScrollView>
        
        );
  }
}