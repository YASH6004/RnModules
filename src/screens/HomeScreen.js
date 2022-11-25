import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const HomeScreen = ({navigation}) => {
    const [usrData, setUsrData] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://dummyjson.com/users',
            headers: {}
        })
            .then((response) => {
                setUsrData(response.data.users);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Text>heleelo</Text>
            <FlatList
                data={usrData}
                keyExtractor={(item, index) => index}
                renderItem={({ item }, index) =>
                (
                    <View style={{flex:1,borderWidth:1}}>
                        <Text>  {item.id}    {item.firstName}</Text>
                    </View>
                )
                }
            />
            <TouchableOpacity style={{backgroundColor:'#abcdef',height:70,width:200,borderRadius:20,alignSelf:'center',justifyContent:'center',borderWidth:1,}} onPress={()=>navigation.navigate('Login')}>
                <Text style={{alignSelf:'center'}}>navigate</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})