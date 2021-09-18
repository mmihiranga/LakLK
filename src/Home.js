import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

 const Home = ({navigation}) => {


    

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        },
        textInput: {
          height: 40,
          width: '90%',
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 8
        }
        
      })
      
    
  return (
    <View style={styles.container}>
  
   
  
   <Button icon="add-a-photo" mode="contained" onPress={() => navigation.navigate('CompanyView')}>
    Company Advertisement 
   </Button>
   <Button icon="add-a-photo" mode="contained" onPress={() => navigation.navigate('CompanyAddForm')}>
    Company Add Form
   </Button>
    
    </View>
    
  );
};

export default Home;



