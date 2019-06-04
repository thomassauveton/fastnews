import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ActivityIndicator,
  Modal,
  TouchableHighlight

} from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';
import { Button } from 'native-base'; 
import Video from 'react-native-video';


export default class SwipeScreen extends Component {
 
 //Constructor avec les états de départ en props 
  constructor(props) {
    super(props);
    this.state = {
      result: true,
      articles:[],
      modalVisible: false,
     };
   }

// Cela rend visiblem le modal = changement d'état

 toggleModal(visible) {
    this.setState({ modalVisible: visible });
 }

// Connexion au backend via le componentWillMount & un Fetch vers Heroku

   componentWillMount(){
    fetch("https://fastnews.herokuapp.com/")
    .then(response => response.json())
    .then((reponseJson)=> {
      console.log("reponse json : ",reponseJson.data.articles[2].author)
      this.setState({
        result: false,
        articles: reponseJson.data.articles
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }

  render() {
 if(this.state.loading){
  return( 
    <View > 
      <ActivityIndicator size="large" color="#0c9"/>
    </View>
)}
// Variables d'affichage sur la card / Via les differents champs de L'API
  var author;
  var title;
  var urlToImage;
  var description;
  var url;
  if(this.state.articles.length >0) {
    // console.log("Titre  :", this.state.articles[2].author)
    author =  this.state.articles[2].author;
    title = this.state.articles[2].title;
    urlToImage = this.state.articles[2].urlToImage;
    description = this.state.articles[2].description;
    url = this.state.articles[2].content;

    console.log(this.state.articles[2].urlToImage)
  }
  //Condition pour le loading de la page : le temps que la card recupere les data de l'API un ecran de loading s'affiche

    if(this.state.articles.length == 0){
      return (<Image style={styles.loading} source={require('../assets/2.gif')} />);
    } 
    
    // Sinon une fois la card chargée avec les données de l'API l'ecran swipe screen s'affiche

    else {
      return (

        // Background du screen 

        <ImageBackground
        style={{flex: 1}}
        source={require("../assets/background.png")}
      >

     {/* View de l'element card  */}

      <View style={{flex:1}}>

      
      
      {/* ELEMENT CARD SWIPE COMPLET  */}

        <CardStack
          style={styles.content}

        //  Element No Mode Card 

          renderNoMoreCards={() => <Text style={{fontWeight:'700', fontSize:18, color:'gray'}}>Vous avez lu toutes les news</Text>}
         
          // SWIPER
          ref={swiper => {
            this.swiper = swiper
          }}

          onSwiped={() => console.log('onSwiped')}
          onSwipedLeft={() => console.log('onSwipedLeft')}
        >

          {/* ELEMENT CARD  */}

          <Card style={[styles.card, styles.card1]}>
        
        {/* Champs pour l'affichage du titre de l'article */}
        
          <Text style={styles.title}>{title}</Text>
        
        {/* Champs pour l'affichage de l'image de l'article  */}
          <Image
            source={{uri : urlToImage}}
            style={styles.image2}
          />
      {/* Champs pour l'affichage de la description de l'article */}

          <Text style={styles.description}>{description}</Text>
         
         {/* Bouton pour lancer le Modal = Article complet */}
         
          <Button style={styles.viewMore}
          onPress = {() => {this.toggleModal(true)}}
           >
          <Text> Lire l'article </Text>
          </Button>

          {/* ZONE MODAL */}

          {/* <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                   <Text>{url}</Text>
                  
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight>
               </View>
            </Modal> */}
            
            {/* FIN MODAL */}


            
          </Card>

          {/* FIN CARD */}
          

          <Card style={[styles.card, styles.card2]}><Text style={styles.label}>B</Text></Card>
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
}

// <----------------------- ZONE CSS ---------------------------->

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
    top: "6%",
    fontSize: 18,
    position: "absolute",
    backgroundColor: "transparent",
    width: "90%",
    height: "20%",
    textAlign: "center",
    
  },
  description: {
    height: "50%",
    width: "75%",
    top: "65%",
    position: "absolute",
    textAlign: "center",
    fontSize: 18
  },
  viewMore:{
    height: "4.926108374384237%",
    width: "48.40425531914894%",
    top: '93%',
    left:'25%',
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    justifyContent:"center",
  },
  loading:{
    position: "absolute",
    justifyContent:"center",
    top : '50%',
    left: '40%'
  },
  container2: {
    alignItems: 'center',
    backgroundColor: '#ede3f2',
    padding: 100
 },
 modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f7021a',
    padding: 100
 },
 text: {
    color: '#3f2949',
    marginTop: 10
 }
});