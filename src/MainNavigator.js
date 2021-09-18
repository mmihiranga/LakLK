import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './Home';
import CompanyView from './Screens/Company/CompanyView';


const Stack = createNativeStackNavigator();
 
 
 const MainNavigator = () => {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    
      <Stack.Screen 
       options={{
        title: 'Home',

        headerStyle: {
        backgroundColor: '#F6F6F9',
        shadowOpacity: 0,
        shadowOffset: { height: 0 , width:0 },
        shadowRadius: 0,
        elevation: 0
        },

        headerTintColor: '#000',
        headerTitleStyle: {
        fontWeight: 'bold',
        headerShadowVisible: false ,
        
       },
      
     }}  name="Home" component={Home} />
      
      
      <Stack.Screen 
      options={{
                 title: 'Burger Palace "Colombo 03"',
                 headerStyle: {
                 backgroundColor: '#F6F6F9',
                 elevation: 0,
                 shadowOpacity: 0,
                
                 },
                 headerTintColor: '#000',
                 headerTitleStyle: {
                 fontWeight: '700',
                 fontSize:20,
                 headerShadowVisible: false,
                 textAlign: "left",
                 fontFamily:"Raleway-Bold"
                },
              }} 

      name="CompanyView" component={CompanyView} />



    </Stack.Navigator>
  </NavigationContainer>
 
  );
};

export default MainNavigator;