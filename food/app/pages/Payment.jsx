import { View, Text, TouchableOpacity, TextInput }  from 'react-native'
import React,{useState} from 'react'
import { useLocalSearchParams, useRouter} from  'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Payment = () => {
    const router = useRouter();
    const item = useLocalSearchParams();
    const [text, setText] = useState('');
  return (
    <View style={{ justifyContent: 'center', paddingVertical: 30, paddingHorizontal:20 }}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Enter your card details to pay</Text>

      <View style={{ marginVertical:5, flexDirection: 'row', display:'flex', justifyContent:'space-evenly', alignItems:'center' }}>

      <View style={{ justifyContent: 'center', paddingVertical: 50, paddingHorizontal:20 }}>
      <Ionicons name="location-outline" size={20} color="white" style={{backgroundColor:'#B40404', padding:10, borderRadius:30}} />
      <Text style={{fontSize:13, fontWeight:'medium'}}>Address</Text>
      </View>
      <View>
      <Ionicons name="card-outline" size={20} color="white" style={{backgroundColor:'#B40404',padding:10, borderRadius:30}}/>
      <Text style={{fontSize:12, fontWeight:'medium'}}>Payment</Text>
      </View>

      </View>


      <View>
        
         <View >
          <TextInput
          style={{height: 50, borderWidth:  1, paddingTop:20,paddingLeft:20,  marginVertical:10, borderRadius: 10, borderColor: '#B40404', fontWeight:'medium', fontSize:12,}}
          placeholder="0000 0000 0000 0000"
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="numeric"/>
          <Text style={{display:'absolute', paddingLeft:10, marginHorizontal:10, justifyContent: 'center', bottom: 55,  width: wp(42),  fontWeight:'medium', fontSize:10, color:  '#B40404',  }}>CARD NUMBER</Text>
          </View>
          

          <View style={{  flexDirection: 'row', display:'flex', justifyContent:'space-between', alignItems:'center', }}>
                
          <View >
          <TextInput
          style={{height: 50, borderWidth:  1, paddingTop:20,paddingLeft:20,  marginVertical:10, borderRadius: 10, borderColor: '#B40404', width: wp(42), fontWeight:'medium', fontSize:12,}}
          placeholder="MM/YY"
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="numeric"/>
          <Text style={{display:'absolute', paddingLeft:10, marginHorizontal:10, justifyContent: 'center', bottom: 55,  width: wp(42),  fontWeight:'medium', fontSize:10, color:  '#B40404',  }}>CARD EXPIRY</Text>
          </View>


          <View >
          <TextInput
          style={{height: 50, borderWidth:  1, paddingTop:20,paddingLeft:20,  marginVertical:10, borderRadius: 10, borderColor: '#B40404', width: wp(42), fontWeight:'medium', fontSize:12,}}
          placeholder="CVV"
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="numeric"/>
          <Text style={{display:'absolute', paddingLeft:10, marginHorizontal:10, justifyContent: 'center', bottom: 55,  width: wp(42),  fontWeight:'medium', fontSize:10, color:  '#B40404',  }}>CVV</Text>
          </View>
          </View>
      </View>


      <TouchableOpacity onPress={() => router.push({pathname: '../pages/Payment', params: item})}  style={{elevation: 10,shadowColor: '#121212', marginTop:20, flexDirection: 'row', backgroundColor:'#B40404', paddingVertical: 10,  display:'flex', justifyContent:'center', borderRadius:10  }}>
          <Text style={{fontSize:18, fontWeight:'bold',  color: 'white', display:'flex', justifyContent: 'center',alignItems: 'center',}}>Continue</Text>
      </TouchableOpacity>

      <View style={{  flexDirection: 'row', justifyContent: 'center', }}>
       <TouchableOpacity onPress={() => router.push({pathname: '../pages/Method', params: item})}  style={{width: wp(50), marginTop:80, flexDirection: 'row', backgroundColor:'#12121220', paddingVertical: 8,  display:'flex', justifyContent:'center', borderRadius:10  }}>
       <AntDesign name="retweet" size={16} color="black" />
          <Text style={{fontSize:12, fontWeight:'medium',paddingLeft:10,  color: '#121212', display:'', justifyContent: 'center',alignItems: 'center',}}>Change Payment Method</Text>
      </TouchableOpacity>
       </View>

      

    </View>
  )
}

export default Payment