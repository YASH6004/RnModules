import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getPageList} from '../redux/action/action'
const Login = () => {
  const dispatch = useDispatch();
  const pageList = useSelector(state => state.pageList.pageList);
  console.log('pageList', pageList)
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState(null);
  const [loginVal, setLoginVal] = useState({
    name: '',
    mNumber: null
  })
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 2 }}>
      <View>
        <Text>LoginScreen</Text>
      </View>

      <View style={{ borderWidth: 1, flex: 0.5, justifyContent: 'center', alignSelf: 'center' }}>
        <Text style={styles.TextN}>Enter Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newVal) => setLoginVal({ ...loginVal, name: newVal })}
          value={loginVal.name}
        />
        <Text style={styles.TextN}>Enter Mobile number:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newVal) => setLoginVal({ ...loginVal, mNumber: newVal })}
          value={loginVal.mNumber}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />

      </View>
      <TouchableOpacity style={{ borderWidth: 1, marginTop: 100 }} 
      onPress={() => {
        console.log('Name==>>', loginVal),
          dispatch(getPageList())
      }
      }>
        <Text style={{ alignSelf: 'center' }}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  TextN: {
    marginRight: 220,
    color: '#000',
  },
})
