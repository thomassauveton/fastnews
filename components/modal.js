import React, { Component } from "react";
import {
    StyleSheet,
    Button,
    Text,
    View,
    Modal,
    TouchableHighlight,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image
 } from "react-native";
 
export default class ModalComponent extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //   modalVisible: false,
        //  };
       }
    //    toggleModal(visible) {
    //     this.setState({ modalVisible: visible });
    //  }

 
  render() {
      console.log(this.props.visible, "state du modal");
      
    return (
        <View>
        <Modal animationType = {"slide"} transparent = {false}
        style = {styles.modal}
        visible = {this.props.visible}
        onRequestClose = {() => { console.log("Modal has been closed.") } }>
   <ScrollView>
     
        <View style={{flex:1}}> 

       {/* Image Article en ScrollView */}
    <TouchableOpacity> 
        <TouchableWithoutFeedback> 
            <View style={{backgroundColor:'red'}}>
                <Image style={{ resizeMode:'contain', flex:1, width:'100%'}} source={require("../assets/example.png")}
                />

                <TouchableHighlight style={styles.buttonClose} onPress={this.props.modal}>
              
                  <Text style = {styles.text}>Close Modal</Text>

                </TouchableHighlight> 


            </View>
        </TouchableWithoutFeedback>
    </TouchableOpacity> 

           
          
            </View>
         </ScrollView> 
     </Modal>
  </View>
    );
  }
}
const styles = StyleSheet.create({
    root: {
    
      flex: 1,
      height:"100%"
    },

    image: {
        top: "0%",
        left: "0%",
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: 10
      },
      buttonClose:{
          position:'absolute',
          top:250,
          right:25,
          backgroundColor:'yellow'
      },
      modal:{
        flex:1, justifyContent:'flex-start'
      }
    });
  