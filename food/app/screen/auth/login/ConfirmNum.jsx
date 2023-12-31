import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal,ActivityIndicator } from 'react-native'
import React, {useState} from 'react';
import {Stack} from 'expo-router';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const ConfirmNum = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);  

  const startTimer = () => {
    const processingTimer = setTimeout(() => {
      // set delay to timer for payment
      setIsLoading(false);
      router.push('../../Home');
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
       
        <View style={{flex:1}}>
  
        <View style={{height:2, width:350, borderRadius: 5, backgroundColor: '#D9D9D9',}}>
  
        <Text style={{height:2, width:350, backgroundColor: '#B40404',marginTop:50}}></Text>
        </View>
  
        <View style={{marginHorizontal:30}}>
        <Text style={{fontWeight:'bold', fontSize:30, color:  "#B40404", marginTop:70 }}>Sign In</Text>
          <Text style={{fontWeight:'bold', fontSize:20, color:  "#B40404", marginTop:70}}>Confirm Phone Number</Text>
          <Text style={{marginTop:10, fontSize:15,}}>Please enter the code sent to the number ending 
          <Text style={{fontWeight: 'bold', color: "#B40404"}}>6789</Text>
          </Text>
        </View>
  
        <View style={{marginHorizontal:30, marginTop:60}}>
          <Text>Enter OTP</Text>
          <TextInput
          style={{height: 40, backgroundColor: '#DFDFDF', paddingLeft:20, marginVertical:20, borderRadius: 10, }}
          placeholder="Enter Phone Number"
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="numeric"
        />
  
        <TouchableOpacity onPress={openModal}  style={{height: hp(6), justifyContent: 'center', borderRadius: 10, display: 'absolute', alignItems: 'center', backgroundColor: "#B40404",}} >
          <Text style={{fontSize: hp(2), fontWeight: 'medium', justifyContent: 'center', alignItems: 'center', color: 'white'}}>Next</Text>
        </TouchableOpacity>
  
  
         <Text style={{marginTop:20, marginLeft:40, fontSize:14,  justifyContent: 'center', alignItems: 'center', display:'flex'}}>Didn’t Receive a code?
           <Text style={{fontWeight: 'bold', color: "#B40404", marginTop:20}}>Resend</Text>
          </Text>
  
  
        </View>
  
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

            <View style={{  backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 10, borderRadius: 20, width: wp(200), alignSelf: 'center',height: wp(200) }}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
              <ActivityIndicator size="large" color='#B40404'/>
              </View>
            
            </View>
            
            </View>
       
       
      </Modal>
      
      </View>
    )
}

export default ConfirmNum

