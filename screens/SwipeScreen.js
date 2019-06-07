import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ActivityIndicator,

} from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';
import { Button } from 'native-base'; 
// import Video from 'react-native-video';
import {connect} from 'react-redux'

class SwipeScreen extends Component {
 
 //Constructor avec les états de départ en props 
  constructor(props) {
    super(props);
    this.state = {
      result: true,
      articles:[],
      image : null,
     };
   }

// Connexion au backend via le componentWillMount & un Fetch vers Heroku

   componentWillMount(){
    fetch("http://172.20.10.3:3000/")
    .then(response => response.json())
    .then((reponseJson)=> {
      // console.log("reponse json : ",reponseJson.data.articles[2].author)
      this.setState({
        result: false,
        articles: reponseJson.data.articles
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }

    //Function qui s edéclanche au boutton du like
 handelpress(){

  //console.log(this.state.articles[6].url)
  // Compilation des url du serveur + url de l'image de l'articles
  // Button like  cree l'url de l'article au backend qui lance puppeter et qui génère le screenshot
console.log("toto",this.props.description)
  const photoUrl = 'http://172.20.10.3:3000/info?url=' + this.state.articles.url;
  console.log(photoUrl)
  //envoie de la const photourl au backend 
  fetch(photoUrl, {
      method: 'GET',

      //reponse du back au front
  }).then((response)=> {
      return response._bodyText;
      //Sa convertie en Data pour générer l'image
  }).then((data)=> {
      //console.log('second res: ' + JSON.stringify(data));
      // ImageTools.getImageFromBase64(data).then(function(image) {
      //     console.log("Image --> ", image)
      // });
      this.props.handleScreenShot(data)
      this.setState({image: `data:image/gif;base64,${data}`})
  }).catch((err)=> {
      console.log('err: ' + err.message);
  });
//   console.log(text)
// }
//Fuction de swipe sur le boutton 
this.swiper.swipeRight();
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

  var newsData = [];
  var NewsList;
    if(this.state.articles.length >0) {
    
    
      NewsList = this.state.articles.map(function(news,i){
        return  (<Card style={[styles.card, styles.card1]}>
        
        {/* Champs pour l'affichage du titre de l'article */}
        
          <Text style={styles.title}>{news.title}</Text>
        
        {/* Champs pour l'affichage de l'image de l'article  */}
          <Image
            source={{uri : news.urlToImage}}
            style={styles.image2}
          />
      {/* Champs pour l'affichage de la description de l'article */}

          <Text style={styles.description}>{news.description}</Text>
         
        </Card>);

      })



      }



    


  // for (let i = 0; i < this.state.articles.length; i++) {
    
  //     // console.log("Titre  :", this.state.articles[2].author)
  //     author =  this.state.articles[i].author;
  //     title = this.state.articles[i].title;
  //     urlToImage = this.state.articles[i].urlToImage;
  //     description = this.state.articles[i].description;
  //     url = this.state.articles[i].url; 
  //      console.log("Titre Article",this.state.articles[i].title);
  //     // console.log(this.state.articles[10].urlToImage)
  //   }
  //  }

  // if(this.state.articles.length >0) {
  //   // console.log("Titre  :", this.state.articles[2].author)
  //   author =  this.state.articles[5].author;
  //   title = this.state.articles[5].title;
  //   urlToImage = this.state.articles[5].urlToImage;
  //   description = this.state.articles[5].description;
  //   url = this.state.articles[5 ].url;

  //   // console.log(this.state.articles[10].urlToImage)
  // }
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

        { NewsList }
        
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
            {/* Utulisation de la fonction   */}
            <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
              this.handelpress();}}
               image={this.state.image} >
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
    alignItems:'center',
    zIndex:0
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

 text: {
    color: '#3f2949',
    marginTop: 10
 },
 screen:{
  flex: 1
 },
 text2:{
  backgroundColor:'red',
  position:'absolute',
  bottom:10,
  padding:15
 }


});

export default SwipeScreen;

