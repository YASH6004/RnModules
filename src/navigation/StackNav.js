import { View, Text } from 'react-native'
import React, { useState,useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './BottomNav';
import Login from '../screens/Login';
import { useDispatch, useSelector } from 'react-redux'


const Stack = createNativeStackNavigator();

const StackNav = () => {

    // console.log('userToken==>>>',userList.users.token)
    const userList = useSelector(state => state.userList)

    const [hasToken, setHasToken] = useState(null)
    useEffect(() => {
        if (userList?.users?.token) {
            setHasToken(true)
        } else {
            setHasToken(false)
        }
    }, [userList])
    
    return (
        <Stack.Navigator>
            {hasToken ?
                (<Stack.Screen name="Bottomnav" component={BottomNav}
                    options={{
                        headerShown: false,
                    }} />) :
                (<Stack.Screen name="Login" component={Login}
                    options={{
                        headerShown: false,
                    }} />)
            }
        </Stack.Navigator>

    )
}

export default StackNav