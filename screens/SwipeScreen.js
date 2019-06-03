

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';


export default class SwipeScreen extends Component {
  render() {
    return (

        <ImageBackground
        style={{flex: 1}}
        source={require("../assets/background.png")}
      >
      <View style={{flex:1}}>


        <CardStack
          style={styles.content}

          renderNoMoreCards={() => <Text style={{fontWeight:'700', fontSize:18, color:'gray'}}>Vous avez lu toutes les news</Text>}
          ref={swiper => {
            this.swiper = swiper
          }}

          onSwiped={() => console.log('onSwiped')}
          onSwipedLeft={() => console.log('onSwipedLeft')}
        >
          <Card style={[styles.card, styles.card1]}>
          <Text style={styles.title}>Football</Text>
          <Image
            source={require("../assets/478x190.jpeg")}
            style={styles.image2}
          />
          <Text style={styles.description}>Les Bleus s’imposent (2-0) sans forcer avant le déplacement en Turquie samedi… </Text>
          </Card>

          <Card style={[styles.card, styles.card2]} onSwipedLeft={() => alert('onSwipedLeft')}>
          
          <Text style={styles.title}>Gilets Jaunes</Text>
          <Image
            source={require("../assets/648x415.jpeg")}
            style={styles.image2}
          />
          <Text style={styles.description}>Samedi, 9.500 manifestants (dont 1.500 à Paris)  soit la plus faible mobilisation depuis le début du mouvement. </Text>
          
          
          </Card>




          <Card style={[styles.card, styles.card1]}><Text style={styles.label}>C</Text></Card>
          <Card style={[styles.card, styles.card2]}><Text style={styles.label}>D</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.label}>E</Text></Card>

        </CardStack>


        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{
              this.swiper.swipeLeft();
            }}>
              <Image source={require('../assets/red.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {
              this.swiper.goBackFromLeft();
            }}>
              <Image source={require('../assets/back.png')} resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
              this.swiper.swipeRight();
            }}>
              <Image source={require('../assets/green.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: 320,
    height: 570,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: 'white',
    flex:1,
    alignItems: 'center',
  justifyContent: 'center',
  },
  card2: {
    backgroundColor: 'white',
    flex:1,
    alignItems: 'center',
  justifyContent: 'center',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#000000',
    backgroundColor: 'transparent',
  },
  footer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    width:220,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  button:{
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    zIndex: 0,
  },
  orange:{
    width:55,
    height:55,
    borderWidth:6,
    borderColor:'rgb(246,190,66)',
    borderWidth:4,
    borderRadius:55,
    marginTop:-15
  },
  green:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#01df8a',
  },
  red:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#fd267d',
  },
  image2: {
    height: "40%",
    width: "100%",
    position: "absolute",
    top: "17.59%"
  },
  title: {
    top: "8%",
    fontSize: 30,
    position: "absolute",
    backgroundColor: "transparent",
    width: "100%",
    height: "9.45%",
    textAlign: "center",
    
  },

  description: {
    height: "50%",
    width: "75%",
    top: "65%",
    position: "absolute",
    textAlign: "center",
    fontSize: 23
  }
});
