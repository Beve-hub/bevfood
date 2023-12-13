import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import {Stack} from 'expo-router';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SignForm = () => {
    const router = useRouter();
    const [text, setText] = useState('');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Stack.Screen
         Options={{
          headerRight: () => <Ionicons name="arrow-back" size={24} color="black" />
         }}
        />
       
        <View style={{flex:1}}>
  
        <View style={{height:2, width:350, backgroundColor: '#B40404',}}>
        </View>

        <View style={{marginHorizontal:30}}>
        <Text style={{fontWeight:'bold', fontSize:30, color:  "#B40404", marginTop:70 }}>Sign Up</Text>
        </View>
  
        <View style={{marginHorizontal:30, marginTop:60}}>
        <View style={{marginVertical:10}}>
          <Text style={{fontWeight:'semiBold', fontSize:16, color:  "#676767",  }}>Enter First Name</Text>
          <TextInput
          style={{height: 40, backgroundColor: '#DFDFDF', paddingLeft:20, marginVertical:10, borderRadius: 10, }}
          placeholder="Enter First Name"
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="text"/>
          </View>

          <View style={{marginVertical:10}}>
          <Text style={{fontWeight:'semiBold', fontSize:16, color:  "#676767",  }}>Enter Last Name</Text>
          <TextInput
          style={{height: 40, backgroundColor: '#DFDFDF', paddingLeft:20, marginVertical:10, borderRadius: 10, }}
          placeholder="Enter Last Name"
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="text"/>
          </View>

          <View style={{marginVertical:10}}>
          <Text style={{fontWeight:'semiBold', fontSize:16, color:  "#676767",  }}>Enter Email Address</Text>
          <TextInput
          style={{height: 40, backgroundColor: '#DFDFDF', paddingLeft:20, marginVertical:10, borderRadius: 10, }}
          placeholder="Enter Email Address"
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="text"/>
          </View>
  
        <TouchableOpacity onPress={() => router.push('../../../pages/Home')}  style={{height: hp(6),marginVertical:20, justifyContent: 'center', borderRadius: 10, display: 'absolute', alignItems: 'center', backgroundColor: "#B40404",}} >
          <Text style={{fontSize: hp(2), fontWeight: 'medium', justifyContent: 'center', alignItems: 'center', color: 'white'}}>Next</Text>
        </TouchableOpacity>
          
        </View>
  
        </View>
      </View>
    )
}

export default SignForm