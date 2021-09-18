/* eslint-disable */
import React, { useState } from 'react';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements'
import { Picker } from '@react-native-picker/picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  ImageBackground,
  TouchableOpacity ,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  TouchableHighlight
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({
    input: {
        height: 45,
        marginLeft: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
      },
      inputMultiline: {
        display: 'flex',
        alignItems: 'flex-start',
        height: 100,
        marginLeft: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
      },
      label: {
        marginTop: 20,
        margin: 12,
        fontFamily: "Raleway-Bold",
        fontSize: 20,
    
      },
      baseText: {
        fontFamily: "Raleway-Bold",
        fontSize: 40,
        fontWeight: "bold",
        color: '#fff',
    
      },
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      highlight: {
        fontWeight: '700',
      },
      AddBtn:{
        width:120,
        alignSelf:"center",
        height:52,
        marginRight:20,
         
        marginTop:20,

    },
    AddBtnContainer:{
        backgroundColor: '#5956E9',
        width:120,
        height:52,
        borderRadius:10,
        margin:8,
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
    AddBtnText:{
        color:"#fff",
        fontFamily: 'Raleway-Bold',
        fontWeight:"700",
        fontSize:15,
        textAlign: 'center',
        paddingLeft:6,
        },
    AddIcon:{
       fontSize:33,
       color:"#fff",
    },
  })
  
const CompanyAddForm = ({ navigation }) => {

    const [number, onChangeNumber] = useState(null);
    const [cname, onChangeCName] = useState(null);
    const [address, onChangeAddress] = useState(null);
    const [description, onChangeDescription] = useState(null);
    const [selectedValue, setSelectedValue] = useState("Restaurant");
    const [image, setImage] = useState('');
    
    
    const backgroundStyle = {
      backgroundColor: '#5956E9',
  
    };
    const choosePhotoFromLibrary = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
        console.log("image",image);
        setImage(image.path);
        this.bs.current.snapTo(1);
      });
    }


    return(

    <SafeAreaProvider style={backgroundStyle}>
        <StatusBar backgroundColor={'#5956E9'} barStyle={'dark-content'} />
        
        <View
            style={{
                backgroundColor: '#5956E9',
                flexDirection: "row",
                height: 180,
                padding: 20,
                marginTop: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

            <Text style={styles.baseText}>
                ADD NEW COMPANY
            </Text>
        </View>
        <ScrollView
        
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}
            style={{
                backgroundColor: '#fff',
                height: 800,
                padding: 20,
                marginTop: 0,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,

            }}>
           
                <Text style={styles.label}>
                    Company Name
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeCName}
                    value={cname}
                    placeholder="Company Name"
                />
                <Text style={styles.label}>
                    Address
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeAddress}
                    value={address}
                    placeholder="Address"
                />
                <Text style={styles.label}>
                    Contact Number
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="+94 xxx xxx xxx"
                    keyboardType="numeric"
                />
                <Text style={styles.label}>
                    Category
                </Text>
                <Picker
                    selectedValue={selectedValue}
                    fullWidth
                    style={{ height: 50, backgroundColor: '#F6F6F6', marginLeft: 12, }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    mode={'dropdown'}
                >
                    <Picker.Item fullWidth label="Restaurant" value="restaurant" />
                    <Picker.Item fullWidth label="Hotel" value="hotel" />
                    <Picker.Item fullWidth label="Grocery" value="grocery" />
                    <Picker.Item fullWidth label="Other" value="other" />
                </Picker>
                

                <Text style={styles.label}>
                    Image
                </Text>

                <ImageBackground
                    source={{
                        uri: image,
                    }}
                    style={{ height: 300, width: 300,display:'flex' , marginLeft:30, marginBottom:30, justifyContent: 'center', backgroundColor:'#808080' }}
                    imageStyle={{ borderRadius: 15 }}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                    </View>
                </ImageBackground>
               
                <Button
                    title={'Open Gallary'}
                    onPress={() => {
                        choosePhotoFromLibrary();
                    }}
                    style={{
                        backgroundColor: '#5956E9',
                    }}
                />
                 <Text style={styles.label}>
                    Description
                </Text>
                <TextInput
                    editable
                    maxLength={40}
                    multiline
                    style={styles.inputMultiline}
                    onChangeText={onChangeDescription}
                    value={description}
                    placeholder="Description"
                    numberOfLines={4}
                />
                
      <TouchableHighlight underlayColor="transparent"  style={styles.AddBtn}>
            <View style={styles.AddBtnContainer}>
                    <Ionicons style={styles.AddIcon} name="ios-add-circle-outline" />
                    <Text style={styles.AddBtnText}>ADD</Text>
            </View>
     </TouchableHighlight>
               
        <View
            style={{
               
                flexDirection: "row",
                height: 80,
                padding: 20,
                marginTop: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

        </View>

        </ScrollView>
    </SafeAreaProvider>



)
                };

export default CompanyAddForm;