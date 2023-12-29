import {Text, View, TextInput, TouchableOpacity,Modal,ActivityIndicator } from 'react-native'
import React, {useState} from 'react';
import {Stack} from 'expo-router';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';

const SignForm = () => {
    const router = useRouter();
    const [text, setText] = useState('');
    const [texto, setTexto] = useState('');
    const [texta, setTexta] = useState('');
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
      <View style={{  justifyContent: 'center', alignItems: 'center'}}>
        <Stack.Screen
        options={{
          headerShown: false,
        }}
       />
       <Text style={{height:2, width:350, backgroundColor: '#B40404',marginTop:70}}></Text>
        <View >
  
        <View style={{height:2, width:350, }}>
          
        </View>

        <View style={{marginHorizontal:30}}>
        <Text style={{fontWeight:'bold', fontSize:30, color:  "#B40404", marginTop:50 }}>Sign Up</Text>
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
          onChangeText={newText => setTexto(newText)}
          value={texto}
          keyboardType="text"/>
          </View>

          <View style={{marginVertical:10}}>
          <Text style={{fontWeight:'semiBold', fontSize:16, color:  "#676767",  }}>Enter Email Address</Text>
          <TextInput
          style={{height: 40, backgroundColor: '#DFDFDF', paddingLeft:20, marginVertical:10, borderRadius: 10, }}
          placeholder="Enter Email Address"
          onChangeText={newText => setTexta(newText)}
          value={texta}
          keyboardType="text"/>
          </View>
  
        <TouchableOpacity onPress={openModal} style={{height: hp(6),marginVertical:20, justifyContent: 'center', borderRadius: 10, display: 'absolute', alignItems: 'center', backgroundColor: "#B40404",}} >
          <Text style={{fontSize: hp(2), fontWeight: 'medium', justifyContent: 'center', alignItems: 'center', color: 'white'}}>Next</Text>
        </TouchableOpacity>
          
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

export default SignForm