import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useLocalSearchParams, useRouter} from  'expo-router'
import { Fooddetails } from '../../components/Foodtype'
import {Stack} from 'expo-router';

const Payaddress = () => {
    const router = useRouter();
    const item = useLocalSearchParams();
    const [food, setFood] = useState(Fooddetails);
    const [text, setText] = useState('');
    
  return (
    <View style={{ justifyContent: 'center', paddingVertical: 30, paddingHorizontal:20 }}>
      <Stack.Screen
       Options={{
        headerRight: () => <Ionicons name="arrow-back" size={24} color="black" style={{backgroundColor: '#B40404'}}/>
       }}
      />
      <Text style={{fontSize:20, fontWeight:'bold'}}>Payment Flow</Text>

      <View style={{ marginVertical:5, flexDirection: 'row', display:'flex', justifyContent:'space-evenly', alignItems:'center' }}>

      <View style={{ justifyContent: 'center', paddingVertical: 50, paddingHorizontal:20 }}>
        <View style={{backgroundColor:'#B40404', flexDirection: 'row', paddingVertical: 10,  display:'flex', justifyContent:'center', padding:10, width: wp(10), height: wp(10),borderRadius:30}} >
        <Ionicons name="location-outline" size={18} color="white" />
        </View>
        <Text style={{fontSize:13, fontWeight:'medium'}}>Address</Text>
      </View>

      <View>
        <View style={{backgroundColor:'#12121220', flexDirection: 'row',  paddingVertical: 10,  display:'flex', justifyContent:'center', padding:10, width: wp(10), height: wp(10),borderRadius:30}}>
        <Ionicons name="card-outline" size={18} color="#878787" />
        </View>
      
      <Text style={{fontSize:12, fontWeight:'medium'}}>Payment</Text>
      </View>

      </View>


      <View>
        
         <View style={{marginVertical:5}}>
          
          <TextInput
          style={{height: 40, borderWidth:  1, paddingLeft:20, marginVertical:10, borderRadius: 10, border: 10, }}
          placeholder=""
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="text"/>
          <Text style={{display:'absolute', marginHorizontal:10, justifyContent: 'center', bottom: 65,  width: wp(38), backgroundColor:'#F3F1F1', fontWeight:'semiBold', fontSize:16, color:  "#121212",  }}>Recievers Address</Text>
          </View>

          <View style={{marginVertical:5}}>
          
          <TextInput
          style={{height: 40, borderWidth:  1, paddingLeft:20, marginVertical:10, borderRadius: 10, border: 10, }}
          placeholder=""
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="numeric"/>
          <Text style={{display:'absolute', marginHorizontal:10, justifyContent: 'center', bottom: 65,  width: wp(51), backgroundColor:'#F3F1F1', fontWeight:'semiBold', fontSize:16, color:  "#121212",  }}>Recievers Phone Number</Text>
          </View>

          <View style={{marginVertical:5}}>
          
          <TextInput
          style={{height: 40, borderWidth:  1, paddingLeft:20, marginVertical:10, borderRadius: 10, border: 10, }}
          placeholder=""
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="text"/>
          <Text style={{display:'absolute', marginHorizontal:10, justifyContent: 'center', bottom: 65,  width: wp(33), backgroundColor:'#F3F1F1', fontWeight:'semiBold', fontSize:16, color:  "#121212",  }}>Recievers Name</Text>
          </View>

      </View>


      <TouchableOpacity onPress={() => router.push({pathname: '../pages/Method', params: item})}  style={{elevation: 10,shadowColor: '#121212', marginTop:10, flexDirection: 'row', backgroundColor:'#B40404', paddingVertical: 10,  display:'flex', justifyContent:'center', borderRadius:10  }}>
          <Text style={{fontSize:18, fontWeight:'bold',  color: 'white', display:'flex', justifyContent: 'center',alignItems: 'center',}}>Continue{item.Price}</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Payaddress