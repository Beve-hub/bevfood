import {  StyleSheet, Text, View, Image, TouchableOpacity, TextInput  } from 'react-native'
import React, {useState} from 'react';
import { useRouter } from 'expo-router';
import {Stack} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Control from '../pages/Control';


const Home = ({ count }) => {
    const router = useRouter();
    const [text, setText] = useState('');
   
    
  return (
    <SafeAreaView style={styles.container} edges={['Top']}>
        <Stack.Screen
       options={{
        headerShown: false
       }}
      />
      <StatusBar style='dark'/>
      <View style={styles.first}>
           <TouchableOpacity style={styles.sec}>
                <Image source={require('../../assets/images/profile.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('../pages/Cart')} style={styles.sec}>
             <View  style={styles.fiv}>
                <AntDesign name="shoppingcart" size={24} color="black"/>
                {count > 0 && <Text style={styles.count}>{count}</Text>}
             </View>
            </TouchableOpacity>     
      </View>
       
       <Text style={{marginHorizontal:30, fontWeight:'bold', fontSize: 20}}>Hi Believe! How do you want your food served</Text>
       
       <View style={{marginHorizontal:30, fontWeight:'bold', fontSize: 20}}>
       <TextInput
          style={{height: 40, backgroundColor: 'transparent',color:'#B40404', borderWidth: 1,borderColor: '#B40404', paddingLeft:20, marginVertical:20, borderRadius: 10, }}
          placeholder="Search for foods"
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="text"
        />
        <Feather name="search" size={20} color="#B40404" style={{position:'absolute', right:20, top:30 }}/>
       </View>

      <Control />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
        margin: 10,
        
    },
    first: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5
    },
    sec:{
        marginHorizontal: 20,
        marginTop: 60,
        marginBottom: 40
    },
    fiv: {
        backgroundColor: '#EBEBEB',
        borderRadius: 500,
        height: 40,
        width: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    count: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#B40404',
        color: 'white',
        borderRadius: 15,
        padding: 5,
        fontSize: 12,
      }
})