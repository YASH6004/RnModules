import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import { FlatList } from 'react-native-gesture-handler';

const ConfirmDetails = () => {

  //add props data here
  const propsDetails = {
    name: 'Disney',
    desc: 'Longer text, what a multi-line sentence would look like.',
    bType: 'Entertainment',
    bDetails: 'Burbank, CA',
    mNumber: '(407) 123-4567',
    email: 'www.disney.com',
    Images: 'Some IMG',
    blackOwned: 'Yes',
    LoyalProg: '',
    squadCard: '',
    cDetails: '',
  }

  //FlatList data
  const Detail = [
    {
      key: 'Business Name',
      value: propsDetails.name,
    },
    {
      key: 'Description',
      value: propsDetails.desc
    },
    {
      key: 'Business Type',
      value: propsDetails.bType
    },
    {
      key: ' Business Details',
      value: `${propsDetails.bDetails} \n ${propsDetails.mNumber} \n ${propsDetails.email}`
    },
    {
      key: 'Images',
      value: propsDetails.Images
    },
    {
      key: 'Black-Owned',
      value: propsDetails.blackOwned
    },
    {
      key: 'Loyalty Program',
      value: propsDetails.LoyalProg
    },
    {
      key: 'Squad Card',
      value: propsDetails.squadCard
    },
    {
      key: 'Contact Details',
      value: propsDetails.cDetails
    },


  ]

  //Flat list header break
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
      <View style={{ flexDirection: 'row',flex:1,borderBottomWidth:1}}>

        {/* KEY */}
        <View style={{flex:0.3}}>
          <Text style={{ color: '#000', fontSize: RFValue(12), }}>
            {item.key}
          </Text>
        </View>
        <View style={{flex:0.1}}></View>
        {/* VALUE */}
        <View  style={{flex:0.7}}>
          <Text style={[(item.key==='Images' || item.key ==='Contact Details')?{paddingBottom:moderateScale(70)}:{ color: '#000',paddingBottom:moderateScale(15)}]}>
            {item.value}
          </Text>
        </View>

      </View>
    )
  })

  // Main Screen return
  return (
    <SafeAreaView style={{ flex: 1, width: wp("100%"), }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}><Text>Header</Text></View>
      {/* Title View */}
      <View style={{ marginTop: moderateScale(40), marginHorizontal: moderateScale(20), }}>

        <Text style={{ fontWeight: 'bold', color: '#000', fontSize: RFValue(20), marginBottom: moderateScale(20) }}>
          Confirm Your Details
        </Text>

        <Text style={{ marginBottom: moderateScale(25),color:'#000' }}>
          Review your information before you submit
        </Text>
      </View>
      {/* Content */}
      <View style={{marginHorizontal:moderateScale(15),height:hp(65)}}>
        <FlatList
          data={Detail}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={FlatListHeader()}
          renderItem={(item,index)=>renderItem(item,index)} />
      </View>
      <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: moderateScale(10), marginRight: moderateScale(20) }}
        onPress={() => {
          alert("Select a business type")
        }
        }>
        <Text style={{ fontWeight: '400', color: '#000' }}>Submit ==X</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ConfirmDetails

const styles = StyleSheet.create({})