import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Image, Text,ImageBackground,TouchableOpacity } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      //Background
      <ImageBackground
        style={{flex: 1}}
        source={require("../assets/background.png")}
      >

      
      </ImageBackground>
    );
  }
}
