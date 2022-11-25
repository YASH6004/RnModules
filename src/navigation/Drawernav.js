import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';


const Drawer = createDrawerNavigator();

const Drawernav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="LoginScreen" component={Login} />
        </Drawer.Navigator>
    )
}

export default Drawernav
