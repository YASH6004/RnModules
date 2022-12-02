import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";

const BusinessScreen = () => {

    //FlatList dynamic Data
    const dyData = [
        {
            name: 'Auto Services'
        },
        {
            name: 'Education'
        },
        {
            name: 'Entertainment'
        },
        {
            name: 'Fashion'
        },
        {
            name: 'Financial Services'
        },
        {
            name: 'Health and Beauty'
        },
        {
            name: 'Home and Garden'
        },
        {
            name: 'LifeStyle'
        },
        {
            name: 'Media'
        },
        {
            name: 'Music'
        },
        {
            name: 'Custom..'
        },
    ];
    const [currVal, setCurrVal] = React.useState()
    console.log(currVal)

    //FlatList Header break
    FlatListHeader = () => {
        return (
            <View
                style={{
                    height: hp(0.1),
                    backgroundColor: "#000",
                }}
            />
        );
    }

    //FlatList RenderItem
    const renderItem = (({ item, index }) => {
        return (
            <TouchableOpacity style={{ borderBottomWidth: moderateScale(1.5), paddingVertical: moderateScale(10), paddingHorizontal: moderateScale(20) }} onPress={() => setCurrVal(item.name)}>
                {(currVal == item.name) ? (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ fontWeight: '800', color: '#000' }}>{item.name}</Text>
                        <Text style={{ color: '#000' }}>X</Text>
                    </View>
                ) : (
                    <Text>{item.name}</Text>
                )}

            </TouchableOpacity>
        )
    })

    // Main Screen return
    return (
        <View style={{ flex: 1, width: wp("100%"), }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}><Text>Header</Text></View>
            {/* Title View */}
            <View style={{ marginTop: moderateScale(40), marginHorizontal: moderateScale(20), }}>

                <Text style={{ fontWeight: 'bold', color: '#000', fontSize: RFValue(20), marginBottom: moderateScale(20) }}>
                    Select Business Type
                </Text>

                <Text style={{ marginBottom: moderateScale(25) }}>
                    Select a business type. This will be used to put your business in the correct category and help with discoverability.
                </Text>

                <Text>
                    Select category:
                </Text>

            </View>
            {/* Content */}
            <View style={{ marginTop: moderateScale(5), height: hp(60), }}>
                <FlatList
                    data={dyData}
                    renderItem={(item, index) => renderItem(item, index)}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={FlatListHeader()}
                />
            </View>
            <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: moderateScale(10), marginRight: moderateScale(20) }}
                onPress={() => {
                    if (currVal) {
                        alert(currVal)
                }else{
                    alert("Select a business type")
                }

            }
            }>
            <Text style={{ fontWeight: '400', color: '#000' }}>Next   ==X</Text>
        </TouchableOpacity>
        </View >
    )
}

export default BusinessScreen

const styles = StyleSheet.create({})