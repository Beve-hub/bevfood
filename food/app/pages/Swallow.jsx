import { View, Text,Alert, Modal, TouchableOpacity,} from 'react-native'
import React,{useState} from 'react';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRouter} from  'expo-router'

const Swallow = () => {
   
    const router = useRouter();
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: '#676767',}}>
        <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
       <StatusBar style="dark" />
        <Modal 
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => {
            setModal(closeModal);
          }}
        >
       <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
       <TouchableOpacity onPress={closeModal} style={{backgroundColor:'white', paddingVertical:5, paddingHorizontal:10, borderRadius: 50}}>
            <Text style={{fontWeight:'bold', fontSize:18}}>X</Text>
        </TouchableOpacity>

      <Text>Swallow</Text>
       </View>
      </Modal>
    </View>
  )
}

export default Swallow