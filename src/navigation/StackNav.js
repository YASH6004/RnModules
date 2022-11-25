import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './BottomNav';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();
const StackNav = () => {

    const [hasToken, setHasToken] = useState(false)

    return (
        <Stack.Navigator>
            <Stack.Screen name="Bottomnav" component={BottomNav}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="Login" component={Login}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>

    )
}

export default StackNav