import { View, Text, TouchableOpacity, TextInput,Modal,ActivityIndicator  }  from 'react-native'  
import React,{useEffect, useState} from 'react'
import { useLocalSearchParams, useRouter} from  'expo-router'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Modact = () => {
  const [isLoading, setIsLoading] = useState(true);  
  useEffect(() => {
    const processingTimer = setTimeout(() => {
      // set delay to timer for payment
      setIsLoading(false);
      router.push("../pages/Success")
    },3000)


    // clear the timer if the component is unmounted before the timeout
    return () => clearTimeout(processingTimer);
  })
  return (
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
  )
}

export default Modact