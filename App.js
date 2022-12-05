import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

// REDUX
import { Provider } from 'react-redux'
import store from './src/redux/store';

//Screens
import StackNav from './src/navigation/StackNav';
import BusinessScreen from './src/screens/BusinessScreen';
import ConfirmDetails from './src/screens/ConfirmDetails';

const App = () => {

  return (
    <Provider store={store}>

      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
    //  {/* <BusinessScreen/> */}
    //  {/* <ConfirmDetails/> */}

  );
}

export default App

const styles = StyleSheet.create({})