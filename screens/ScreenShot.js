import React,{ Component } from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';

// import of my reducers


// Import modules related to Redux


import {connect} from 'react-redux';




class ScreenShot extends Component {
  render() {

    var ScreenView = []
    
      ScreenView = this.props.Cards.map(function (Card, i) {
     
    
    })
       

        
    return (
       
        <ScrollView
        contentContainerStyle={{  flex: 1,
          }}>
          <Image
            source={{uri:Card.ScreenShot}}
                 
            />
      </ScrollView>
        
        )
         
  })
    

    function mapStateToProps(state) {
        console.log(state) 
         return ({
         Cards: state.Cards,
        })
    }
    export default connect(
        mapStateToProps,
        null
        )
        (ScreenShot);