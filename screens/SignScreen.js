import React, {Component} from "react";
import { Center } from "@builderx/utils";
import {View, StyleSheet, Image, Text, ImageBackground,TouchableOpacity} from "react-native";

export default class SignScreen extends Component {
  render() {
    return (

// CSS EN BAS DE PAGE !! 

      <ImageBackground
        style={{
        flex: 1
      }}
     
        source={require("../assets/background.png")}>
<View style={styles.root}
>
       

      {/* //Button Login Facebook */}



{/* TouchableOpacity permet à l'image d'avoir un call to action il englobe l'element image dans une nouvelle view */}

<Center horizontal>
        
        <TouchableOpacity style={styles.buttonFacebookShadow}
             onPress={() => this.props.navigation.navigate('Home')}>
          <Image
            source={require("../assets/facebookbutton.png")}
            style={styles.facebookButton}
          />
          </TouchableOpacity>
          </Center>

           {/* //Button Login Google */}
        
        <Center horizontal>
        <TouchableOpacity style={styles.buttonGoogleShadow}
             onPress={() => this.props.navigation.navigate('Home')}>
          <Image
            source={require("../assets/googlebutton.png")}
            style={styles.googleButton}
          />
          </TouchableOpacity>
        </Center>

        {/* // Text intro */}

        <Center horizontal>
          <Text style={styles.textWelcome}></Text>
        </Center>
        <Text style={styles.textConnexion}>Connexion & Inscription </Text>
        <Center horizontal>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
        </Center>
      </View>
       
      </ImageBackground>
    );
  }
}

// Ici commence le 'CSS' 

const styles = StyleSheet.create({
  root: {
    
    flex: 1
  },
  facebookButton: {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  // le Style googleButton est celui de l'élément parent 'buttonShadow2"
  
  googleButton: {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
   
  },
  
  
  textConnexion: {
    top: "65%",
    position: "absolute",
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: 17,
    width: "43.29%",
    height: "3.5%",
    left: "29.07%",
    alignContent:"center"
  },
  logo: {
    height: "30%",
    width: "43.5%",
    position: "absolute",
    top: "28%",
    left:"26%"
  },
  // le Style du ButtonShadow est celui qui sera appliqué à l'image 
buttonFacebookShadow:{
  height: "5.5%",
  width: "80%",
  position: "absolute",
  top: "69.77%",
  shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowRadius: 4,
    elevation: 12,
    shadowOpacity: 0.58
},
// le Style du ButtonShadow est celui qui sera appliqué à l'image 
buttonGoogleShadow:{
  height: "5.5%",
  width: "80%",
  position: "absolute",
  top: "77.44%",
  shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowRadius: 4,
    elevation: 12,
    shadowOpacity: 0.58
}
});
