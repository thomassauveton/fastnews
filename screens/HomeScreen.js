import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Image, Text,ImageBackground,TouchableOpacity } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      //Background
      <ImageBackground
        style={{flex: 1}}
        source={require("../assets/background.png")} >
<View style={styles.root}>
        <Center horizontal>
        <TouchableOpacity style={styles.imageShadowProfil}onPress={() => this.props.navigation.navigate('Profil')}>
          <Image
            source={require("../assets/iconeuser.png")}
            style={styles.image}
          />
          </TouchableOpacity>
        </Center>
        <Center horizontal>
        <TouchableOpacity style={styles.imageShadowTimer}onPress={() => this.props.navigation.navigate('Timer')}>
          <Image
            source={require("../assets/iconetimer.png")}
            style={styles.image}
          />
          </TouchableOpacity>
        </Center>
        <Center horizontal>
        <TouchableOpacity style={styles.imageShadowNews}onPress={() => this.props.navigation.navigate('News')}>
          
          <Image
            source={require("../assets/iconenews.png")}
            style={styles.image}
          />
        </TouchableOpacity>

        </Center>
        <Center horizontal>
          <Image
            source={require("../assets/logofooter.png")}
            style={styles.logoFooter}
          />
        </Center>
        <Text style={styles.textProfil}>PROFIL</Text>
        <Center horizontal>
          <Text style={styles.textTimer}>TEMPS DE TRAJET</Text>
        </Center>
        <Center horizontal>
          <Text style={styles.textNews}>NEWS DU JOUR</Text>
        </Center>
      </View>
      
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    root: {
    
      flex: 1
    },

    image: {
        top: "0%",
        left: "0%",
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: 10
      },


    imageShadowProfil: {
      height: "14%",
      width: "30%",
      position: "absolute",
      top: "23.4%"
    },


    imageShadowTimer: {
        height: "14%",
        width: "30%",
      position: "absolute",
      top: "45.07%"
    },
    imageShadowNews: {
        height: "14%",
        width: "30%",
      position: "absolute",
      top: "66.75%"
    },
    logoFooter: {
      height: "5.5%",
      width: "11%",
      top: "90%",
      position: "absolute"
    },
    textProfil: {
      height: "2%",
      width: "30.4%",
      top: "38%",
      left: "35%",
      position: "absolute",
      backgroundColor: "transparent",
      color: "#248f91",
      textAlign: "center",
      fontWeight:"bold"
    },
    textTimer: {
      position: "absolute",
      backgroundColor: "transparent",
      textAlign: "center",
      color: "#248f91",
      top: "59.98%",
      width: "33.86666666666667%",
      height: "1.600985221674877%",
      fontWeight:"bold"
    },
    textNews: {
      top: "81.65%",
      position: "absolute",
      backgroundColor: "transparent",
      textAlign: "center",
      color: "#248f91",
      width: "28.53333333333333%",
      height: "3.32512315270936%",
      fontWeight:"bold"
    }
  });
  