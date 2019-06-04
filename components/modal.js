import React, { Component } from "react";
import { StyleSheet,Button, Text, View } from "react-native";
import Modal from "react-native-modal";
 
export default class ModalComponent extends Component {

    state = {
        isModalVisible: false
      };
     
      toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };

 
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
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
    });
  