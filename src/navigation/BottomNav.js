import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Drawernav from './Drawernav';
import DashBoard from '../screens/DashBoard';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Drawernav" component={Drawernav}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={"green"} size={32} />
                    ),
                    headerShown: false
                }} />
            <Tab.Screen name="DashBoard" component={DashBoard}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="view-dashboard" color={'red'} size={32} />
                    ),
                    headerShown: false
                }}
                 />
        </Tab.Navigator>
    )
}

export default BottomNav