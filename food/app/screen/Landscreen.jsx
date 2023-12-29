import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity  } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import {Stack} from 'expo-router';
import IMG from '../../assets/images/onboarding4.png'
import IMG2 from '../../assets/images/google.png'

const Landscreen = () => {
  const router = useRouter();
  return (
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Image source={IMG}/>
      <View >
         <Text style={{fontSize: 20,fontWeight: 'bold',width: wp(60),textAlign: 'center',marginTop: 20,}}>Quick and fast delivery to your door step.</Text>
      </View>

      <View >
      <View style={{  flexDirection: 'row', justifyContent: 'center', }}>
      <TouchableOpacity onPress={() => router.push('../screen/auth/signup/SignUp')}  style={{width: wp(80),borderWidth:1, marginTop:60, flexDirection: 'row',gap:10, backgroundColor:'transparent', paddingVertical: 9,  display:'flex', justifyContent:'center', borderRadius:10, alignItems:'center'  }}>
        <Image source={IMG2}/>
          <Text style={{fontSize:16, fontWeight:'semiBold',   display:'flex', justifyContent: 'center',alignItems: 'center',}}>Sign Up with Google</Text>
      </TouchableOpacity>
      </View>

      <View style={{  flexDirection: 'row', justifyContent: 'center', }}>
      <TouchableOpacity onPress={() => router.push('../screen/auth/signup/SignUp')}  style={{width: wp(80),elevation: 10,shadowColor: '#121212', marginTop:10, flexDirection: 'row', backgroundColor:'#B40404', paddingVertical: 9,  display:'flex', justifyContent:'center', borderRadius:10  }}>
          <Text style={{fontSize:16, fontWeight:'semiBold',  color: 'white', display:'flex', justifyContent: 'center',alignItems: 'center',}}>Sign Up</Text>
      </TouchableOpacity>
      </View>
          <Text style={{marginTop:20, marginLeft:40, fontSize:14,  justifyContent: 'center', alignItems: 'center', display:'flex'}}>Already  have an account?
           <Text style={{fontWeight: 'bold', color: "#B40404", marginTop:20}} onPress={() => router.push('../screen/auth/login/Login')}>Sign In</Text>
          </Text>
      </View>
      
    </View>
  )
}

export default Landscreen