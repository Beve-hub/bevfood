import { View, Text, TouchableOpacity,  Modal,ActivityIndicator }  from 'react-native'
import React,{useEffect, useState} from 'react'
import { useLocalSearchParams, useRouter} from  'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fooddetails } from '../../components/Foodtype'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';


const Method = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [food, setFood] = useState(Fooddetails);
  const [textVisible, setTextVisible] = useState(false);
  const [textVis, setTextVis] = useState(true);
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
  

    const [text, setText] = useState('');

    const [showDropdown, setShowDropdown] = useState(false);
  

  const handlePress = () => {
    router.push("../pages/Payment")
  };
  const toggleDropdown = () => {

    setShowDropdown(!showDropdown);
    setTextVisible(!textVisible);
    setTextVis(textVis);
  };




  return (
    <View style={{ justifyContent: 'center', paddingVertical: 30, paddingHorizontal:20 }}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Payment Flow</Text>

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

      <View style={{flexDirection: 'grid', gap:10}}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap:10,}}>
          <TouchableOpacity onPress={handlePress} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',padding: 10,borderWidth: 1,borderColor: '#B40404', backgroundColor: 'transparent',borderWidth:  1, borderRadius:20, height: 20, width: 20,}}>
            {textVis && (<Text style={{display:'absolute', padding: 7,  borderRadius:20,height: 5,    width: 5,}}></Text>)}
          </TouchableOpacity>
          <Text>Pay With Card</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', gap:10,}}>
          <TouchableOpacity onPress={toggleDropdown} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',padding: 10,borderWidth: 1,borderColor: '#B40404', backgroundColor: 'transparent',borderWidth:  1, borderRadius:20,height: 15,    width: 15,}}>
            {textVisible && (<Text style={{display:'absolute', padding: 7, backgroundColor:'#B40404', borderRadius:20,height: 5,    width: 5,}}></Text>)}
          </TouchableOpacity>
          <Text>Pay With Cash</Text>
        </View>
       

      {showDropdown && (
        <View style={{flexDirection: 'grid',  justifyContent: 'center', marginTop: 30, height: 200, padding:20 }}>
          
          <View style={{flexDirection: 'grid',  justifyContent: 'flex-start', alignItems: 'flex-start', width: 230,gap:20,}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',paddingLeft:35 }}>
              <Text style={{fontSize:16, fontWeight:'bold'}}>Address: </Text>
              <Text>
                4 Balogun street governor road, ikotun lagos
              </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
              <Text style={{fontSize:16, fontWeight:'bold'}}>Price: </Text>
              <Text>{item.Price}</Text>
              </View>
          </View>
          
          
          <View style={{  flexDirection: 'row', justifyContent: 'center', }}>
            <TouchableOpacity onPress={openModal} style={{width: wp(80),elevation: 10,shadowColor: '#121212', marginTop:60, flexDirection: 'row', backgroundColor:'#B40404', paddingVertical: 9,  display:'flex', justifyContent:'center', borderRadius:10  }}>
               <Text style={{fontSize:18, fontWeight:'bold',  color: 'white', display:'flex', justifyContent: 'center',alignItems: 'center',}}>Pay {item.Price} </Text>
            </TouchableOpacity>
          </View> 

        </View>
      )}
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

export default Method