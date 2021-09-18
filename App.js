/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import MainNavigator from './src/MainNavigator';
 import { library } from '@fortawesome/fontawesome-svg-core'
 import { fab } from '@fortawesome/free-brands-svg-icons'
 import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
 library.add(fab, faCheckSquare, faCoffee)

 const App = () => {
  return (
 
    <MainNavigator/>
   
  );
};

export default App;
