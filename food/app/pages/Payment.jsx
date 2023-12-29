import { View, Text, TouchableOpacity, TextInput,Modal,ActivityIndicator  }  from 'react-native'
import React,{useEffect, useState} from 'react'
import { useLocalSearchParams, useRouter} from  'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fooddetails } from '../../components/Foodtype'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';


const Payment = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [food, setFood] = useState(Fooddetails);
    const [text, setText] = useState('');
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);  

    const startTimer = () => {
      const processingTimer = setTimeout(() => {
        // set delay to timer for payment
        setIsLoading(false);
        router.push('../pages/Success');
      }, 3000);
  
      // clear the timer if the component is unmounted before the timeout
      return () => clearTimeout(processingTimer);
    };
  
      const openModal = () => {
          setModal(true);
          startTimer();
      }
  
      const closeModal = () => {
          setModal(false);
      }

    
  return (
    <View style={{ justifyContent: 'center', paddingVertical: 30, paddingHorizontal:20 }}>
      <Text style={{fontSize:18, fontWeight:'bold'}}>Enter your card details to pay</Text>

      <View style={{ marginVertical:5, flexDirection: 'row', display:'flex', justifyContent:'space-evenly', alignItems:'center' }}>

      <View style={{ justifyContent: 'center', paddingVertical: 50, paddingHorizontal:20 }}>
        <View style={{backgroundColor:'#B40404', flexDirection: 'row', paddingVertical: 10,  display:'flex', justifyContent:'center', padding:10, width: wp(10), height: wp(10),borderRadius:30}} >
        <Ionicons name="location-outline" size={18} color="white" />
        </View>
        <Text style={{fontSize:13, fontWeight:'medium'}}>Address</Text>
      </View>

      <View>
        <View style={{backgroundColor:'#B40404', flexDirection: 'row',  paddingVertical: 10,  display:'flex', justifyContent:'center', padding:10, width: wp(10), height: wp(10),borderRadius:30}}>
        <Ionicons name="card-outline" size={18} color="white" />
        </View>
      
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
      
      <View style={{  flexDirection: 'row', justifyContent: 'center', }}>
      <TouchableOpacity onPress={openModal} style={{width: wp(80),elevation: 10,shadowColor: '#121212', marginTop:60, flexDirection: 'row', backgroundColor:'#B40404', paddingVertical: 9,  display:'flex', justifyContent:'center', borderRadius:10  }}>
          <Text style={{fontSize:18, fontWeight:'bold',  color: 'white', display:'flex', justifyContent: 'center',alignItems: 'center',}}>Pay {item.Price} </Text>
      </TouchableOpacity>
      </View>


      <View style={{  flexDirection: 'row', justifyContent: 'center', }}>
       <TouchableOpacity onPress={() => router.push({pathname: '../pages/Method', params: item})}  style={{width: wp(50), marginTop:50, flexDirection: 'row', backgroundColor:'#12121220', paddingVertical: 8,  display:'flex', justifyContent:'center', borderRadius:10  }}>
       <AntDesign name="retweet" size={16} color="black" />
          <Text style={{fontSize:12, fontWeight:'medium',paddingLeft:10,  color: '#121212', display:'', justifyContent: 'center',alignItems: 'center',}}>Change Payment Method</Text>
      </TouchableOpacity>
       </View>

       <View style={{  flexDirection: 'row', justifyContent: 'center', marginTop:50, gap:5}}>
        <FontAwesome name="lock" size={20} color="black" />
        <Text>Secured By</Text>
        <Text style={{  fontWeight: 'bold'}}> Fusion </Text>
      </View>

      <Modal 
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => {
            setModal(closeModal);
          }}>
           
            <View
             style={{
              flex:1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#12121290'
             }}
            >

            <View style={{  backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 10, borderRadius: 20, width: wp(80), alignSelf: 'center',height: wp(50) }}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
              <ActivityIndicator size="large" color='#B40404'/>
               <Text>Processing Payment Please Wait</Text>
              </View>
            
            </View>
            
            </View>
       
       
      </Modal>
      
    </View>
  )
}

export default Payment