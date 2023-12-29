import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import IMG1 from '../../assets/images/success.png'
import { useRouter } from "expo-router";
import { Stack } from "expo-router";

const Success = () => {
    const router = useRouter();
  return (
    <View style={{flex:1,justifyContent: 'center', paddingVertical: 30, paddingHorizontal:20,alignItems: 'center'}}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Image source={IMG1}  style={{height:hp(20),width: wp(40),marginVertical:20}}/>
      <View style={{flexDirection: 'grid',  justifyContent: 'flex-start', alignItems: 'center', gap:20,}}>
        <Text style={{ fontSize:20, fontWeight:'bold'}}>Payment Successful</Text>
        <Text style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', width: 270, fontSize:16}}>Payment successful please print reciept,while your food arrive shortly</Text>
      </View>
      
      <View style={{  flexDirection: 'row', justifyContent: 'center', }}>
            <TouchableOpacity onPress={() => router.push("../screen/Home")} style={{width: wp(80),elevation: 10,shadowColor: '#121212', marginTop:60, flexDirection: 'row', backgroundColor:'#B40404', paddingVertical: 9,  display:'flex', justifyContent:'center', borderRadius:10  }}>
               <Text style={{fontSize:18, fontWeight:'bold',  color: 'white', display:'flex', justifyContent: 'center',alignItems: 'center',}}>Back to Home </Text>
            </TouchableOpacity>
       </View>


    </View>
  )
}

export default Success