import { View, Text, Image, TouchableOpacity,Modal } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter} from  'expo-router'
import { Fooddetails } from '../../components/Foodtype'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Incre from './Incre';
import { StatusBar } from "expo-status-bar";




const ProductId = () => {
    const router = useRouter();
    const item = useLocalSearchParams();
    const [food, setFood] = useState(Fooddetails);
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

   
    
  return (
    <View style={{justifyContent: 'center', paddingVertical: 30, paddingHorizontal:10}}>
      <StatusBar style="dark" />
      <Text style={{fontWeight:'bold', fontSize: 20, margin:5,}}>Hi Believe! View Your Cart</Text>
       <View style={{marginVertical:30, marginHorizontal:5}}>

       <Text style={{marginVertical:10, fontSize: 18,}}>{item.name}</Text>
       <Image source={item.image} style={{height: wp(50), width: wp(91)}}/>

       <View style={{marginVertical:20,}}>
        
        <View style={{ marginVertical:20, flexDirection: 'row', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <Text style={{marginVertical:10, fontSize: 18, fontWeight:'bold',}}>Description</Text>
        </View>
        
        <Text style={{marginVertical:10, fontSize: 16,  }}>{item.title}</Text>
       </View>
       
       <TouchableOpacity  onPress={openModal} style={{elevation: 10,shadowColor: '#121212', marginTop:40, flexDirection: 'row', backgroundColor:'#B40404', paddingVertical: 5, paddingHorizontal: 25, display:'flex', justifyContent:'space-between', borderRadius:10  }}>
        <Text style={{marginVertical:10, fontSize: 18, fontWeight:'bold', color:'white'}}>Checkout</Text>
        <Text style={{marginVertical:10, fontSize: 18, fontWeight:'bold', color:'white'}}>{item.Price}</Text>
       </TouchableOpacity>
       </View>



      
      <Modal 
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => {
            setModal(closeModal);
          }}>
            <StatusBar style="dark" />
            <View
             style={{
              flex:1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#12121290'
             }}
            >


            <View style={{alignItems:'flex-end'}}>
       <TouchableOpacity onPress={closeModal} style={{backgroundColor:'white',width: wp(10), marginVertical:5, paddingVertical:3, paddingHorizontal:12, borderRadius: 50}}>
            <Text style={{fontWeight:'bold', fontSize:15}}>X</Text>
        </TouchableOpacity>

        <View style={{  backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 10, borderRadius: 20, width: wp(80), alignSelf: 'center',height: wp(178) }}>
           <Text  style={{fontSize:18, fontWeight:'bold',  paddingHorizontal: 20,}}>Choose your Extras? </Text>

           <View style={{ marginVertical:8, flexDirection: 'row', display:'flex', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 10, }}>
            <Text style={{fontSize:18,  }}>{item.extra4}</Text>
            <View>
              <Text  style={{fontSize:15, marginVertical:5 }}>2 Wraps</Text>
              <Incre/>
            </View>
           </View>

           <View style={{ marginVertical:8, flexDirection: 'row', display:'flex', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 10, }}>
            <Text style={{fontSize:18,  }}>{item.extra5}</Text>
            <View>
              <Text  style={{fontSize:15, marginVertical:5 }}>2 Wraps</Text>
              <Incre/>
            </View>
           </View><View style={{ marginVertical:8, flexDirection: 'row', display:'flex', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 10, }}>
            <Text style={{fontSize:18,  }}>{item.extra6}</Text>
            <View>
              <Text  style={{fontSize:15, marginVertical:5 }}>2 Wraps</Text>
              <Incre/>
            </View>
           </View>

           <View >

           <View style={{ marginVertical:20, flexDirection: 'row', display:'flex', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 10, }}>
            <Text style={{fontSize:18,  }}>{item.extra1}</Text>
            <View>
              <Incre/>
            </View>
           </View>

           <View style={{ marginVertical:20, flexDirection: 'row', display:'flex', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 10, }}>
            <Text style={{fontSize:18,  }}>{item.extra2}</Text>
            <View>
              <Incre/>
            </View>
           </View>

           <View style={{ marginVertical:20, flexDirection: 'row', display:'flex', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 10, }}>
            <Text style={{fontSize:18,  }}>{item.extra3}</Text>
            <View>
              <Incre/>
            </View>
           </View>

           </View>
     




           <TouchableOpacity onPress={() => router.push({pathname: '../pages/Pay', params: item})} style={{elevation: 10,shadowColor: '#121212', marginTop:20, flexDirection: 'row', backgroundColor:'#B40404', paddingVertical: 10,  display:'flex', justifyContent:'center', borderRadius:10  }}>
            <Text style={{fontSize:18, fontWeight:'bold',  color: 'white', display:'flex', justifyContent: 'center',alignItems: 'center',}}>Next</Text>
           </TouchableOpacity>
        
        </View>
       </View>
            </View>
       
       
      </Modal>
      </View>
   
  )
}

export default ProductId