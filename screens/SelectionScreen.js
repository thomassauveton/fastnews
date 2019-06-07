import React, { Component } from 'react';
import { Container, Header, Content,Note, List, ListItem, Thumbnail, Text, Left, Body, Right, Button,View } from 'native-base';
import {note, numberOfLines,ImageBackground} from "react-native";
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';


 class SelectionScreen extends Component {
  render() {
    var swipeoutBtns = [
        {
          text: 'Delete'
        }
      ]
    return (

     
      <Container>
         <ImageBackground
        style={{flex: 1}}
        source={require("../assets/background.png")}
      >
        
        <Content style={{marginTop:"20%"}}>
          <List>
          <Swipeout right={swipeoutBtns}>
  <View>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            </View>
</Swipeout>
          </List>
        </Content>
        </ImageBackground>
      </Container>
      
    );
  }
}
function mapStateToProps(state) {
  console.log("Affichage",state)
  return { pictures: state }

}
export default connect(
  mapStateToProps,
  null
)(SelectionScreen);