import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../redux/action/userAction'


const Login = () => {

  const [loginVal, setLoginVal] = useState({
    name: "kminchelle",
    pass: "0lelplR"
  })
  const dispatch = useDispatch()

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
          onChangeText={(newVal) => setLoginVal({ ...loginVal, pass: newVal })}
          value={loginVal.pass}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />

      </View>
      <TouchableOpacity style={{ borderWidth: 1, marginTop: 100 }}
        onPress={() => {
          dispatch(userAction({loginVal}))
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
