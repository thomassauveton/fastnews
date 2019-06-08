import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Note,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  View
} from 'native-base';
import {
  note,
  numberOfLines,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Swipeout from 'react-native-swipeout';
import {connect} from 'react-redux';

class SelectionScreen extends Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
   });
  }

  render() {
    var AllRow = []
    if (this.props.Cards.length >0 ) {
      // console.log("retour cards",this.props.Cards)
      var ctx=this
      AllRow = this.props.Cards.map(function (Card, i) {
        var swipeoutBtns = [
          {
            backgroundColor: "red",
            color : "#FFF",
            onPress: ()=>ctx.props.deleteCard(i),
            text: 'Delete',
          }
        ]
  
          return (
          
            <Swipeout right={swipeoutBtns}>
            <View>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{uri:Card.urlToImage}}/>
              </Left>
              <Body>
                <Text>{Card.title}</Text>
                <Text note numberOfLines={1}>{Card.description}
                </Text>
              </Body>
              <Right>
  
                {/* <TouchableOpacity style={styles.imageShadowTimer}activeOpacity = { .5 } onPress={ this.callFun }>> */}
                {/* <Image source={require('../assets/screenshot2.jpg')} /> */}
                <Button transparent >
                  <Text>View</Text>
                </Button>
                {/* </TouchableOpacity> */}
  
              </Right>
  
            </ListItem>
            </View>
            </Swipeout>
          )
        })
    }
    return (

      <Container>
        <ImageBackground
          style={{
          flex: 1
        }}
          source={require("../assets/background.png")}>

          <Content style={{
            marginTop: "20%"
          }}>
            <List>   
                  {
                   AllRow.length === 0
                      ?<Image style={styles.loading} source={require('../assets/2.gif')} />
                      :AllRow
                  } 
            </List>
          </Content>
        </ImageBackground>
      </Container>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,

    // Set content's vertical alignment.
    justifyContent: 'center',

    // Set content's horizontal alignment.
    alignItems: 'center',

    backgroundColor: '#FFF8E1'
  },

  ImageClass: {
    // Setting up image width.
    width: 250,

    // Setting up image height.
    height: 44

  }
});

function mapStateToProps(state) {
  return ({
  Cards: state.Cards,
  Delete : state.Delete,

})
}
function mapDispatchToProps(dispatch) {
  return {
    deleteCard(position) { 
     dispatch({
     type: 'deleteCard',
     position :position,

    }) 
   }
  }
 }
export default connect(mapStateToProps, mapDispatchToProps)(SelectionScreen);