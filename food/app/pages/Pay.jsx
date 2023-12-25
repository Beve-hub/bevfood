import { View, Text,Image,TouchableOpacity  } from 'react-native'
import React, { useState }  from 'react'
import { useLocalSearchParams, useRouter} from  'expo-router'
import { Fooddetails } from '../../components/Foodtype'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Incre from './Incre';
const Pay = ({count}) => {
    const router = useRouter();
    const item = useLocalSearchParams();
    const [food, setFood] = useState(Fooddetails);
  return (
    <View style={{justifyContent: 'center', paddingVertical: 30, paddingHorizontal:10}}>
      <Text style={{fontWeight:'bold', fontSize: 20, margin:5,}}>Hi Believe! Here’s Your Order</Text>
      <View style={{marginVertical:30, marginHorizontal:5}}>

       <Text style={{marginVertical:10, fontSize: 18,}}>{item.name}</Text>
       <Image source={item.image} style={{height: wp(50), width: wp(91)}}/>

       <View style={{marginVertical:10,}}>
        
        <View style={{ marginVertical:5, flexDirection: 'row', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <Text style={{fontSize: 18, fontWeight:'bold',}}>Your Order</Text>
        </View>
        <Text style={{marginVertical:5, fontSize: 16,  }}>{item.name}</Text>

        <View style={{ marginVertical:5, flexDirection: 'row', display:'flex', justifyContent:'space-between', alignItems:'center', }}>
        <Text style={{ fontSize: 16,  }}>{item.extra4}{item.wrap}</Text> 
        </View>

        <View style={{ marginVertical:5, flexDirection: 'row', display:'flex', justifyContent:'space-between', alignItems:'center', }}>
        <Text style={{ fontSize: 16,  }}>{item.extra1}piece</Text> 
        </View>

        <View style={{ marginVertical:5, flexDirection: 'row', display:'flex', justifyContent:'space-between', alignItems:'center', }}>
        <Text style={{ fontSize: 16,  }}> please complete the order to proceed to payment</Text> 
        </View>

       </View>

       <View style={{marginVertical:10,}}>
       <Text style={{ fontSize: 18, fontWeight:'bold',}}>Number of  Order</Text>
       <View style={{ width: wp(35)}}>
       <Incre/>
       </View>
       </View>
       
       <TouchableOpacity onPress={() => router.push("../pages/Payaddress")} style={{elevation: 10,shadowColor: '#121212', marginTop:10, flexDirection: 'row', backgroundColor:'#B40404', paddingVertical: 10,  display:'flex', justifyContent:'center', borderRadius:10  }}>
          <Text style={{fontSize:18, fontWeight:'bold',  color: 'white', display:'flex', justifyContent: 'center',alignItems: 'center',}}>Payment</Text>
        </TouchableOpacity>
       </View>
    </View>
  )
}
 
export default Pay