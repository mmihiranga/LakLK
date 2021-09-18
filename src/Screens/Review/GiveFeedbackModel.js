import React, { useState } from "react";
import { Alert, Modal, StyleSheet,Dimensions, Text, Pressable, View,TouchableHighlight } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
const {width , height} = Dimensions.get("window")

const GiveFeedbackModel = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
  
  <View style={styles.centeredView}>
      
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>



      {/* <Pressable
        style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}


      <TouchableHighlight underlayColor="transparent" onPress={() => setModalVisible(true)} style={styles.AddReviewBtn}>
            <View style={styles.AddReviewBtnContainer}>
                    <Ionicons style={styles.FeedbackAddIcon} name="ios-add-circle-outline" />
                    <Text style={styles.AddReviewBtnText}>ADD YOUR FEEDBACK</Text>
            </View>
     </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({

    AddReviewBtn:{
        width:230,
        alignSelf:"flex-end",
        height:52,
        marginRight:20,
        

    },
    AddReviewBtnContainer:{
        width:220,
        height:52,
        borderRadius:10,
        margin:8,
        backgroundColor:"#FFFFFF",
        borderColor:'#FFFFFF', 
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: "black",
        shadowRadius: 10,
        flexDirection:"row",
        justifyContent:"center",
        alignItems: 'center',
        shadowOffset: {width : 0.5,height:0.5},
        shadowOpacity:0.5,
        elevation: 5,
    },
    AddReviewBtnText:{
        color:"#F6F6F9",
        fontFamily: 'Raleway-Bold',
        fontWeight:"700",
        fontSize:15,
        textAlign: 'center',
        paddingLeft:6,
        color:"#343333",
        },
    FeedbackAddIcon:{
       fontSize:33,
       color:"#343333",
    },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width:width,
    height:400,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default GiveFeedbackModel;