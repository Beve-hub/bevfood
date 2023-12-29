import { StyleSheet, Text, TouchableOpacity, View ,  Animated} from 'react-native'
import React, { useEffect, useRef } from 'react'
import { AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';


const NextButton = () => {
  const router = useRouter();
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = size / 2 + strokeWidth /2;
    const circumference = 2 * Math.PI * radius;
    const progressAnimation = useRef(new Animated.Value(0).current)
    const progressRef = useRef(null)

    
   

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('../screen/Landscreen')} style={{elevation: 10,shadowColor: '#121212',justifyContent: 'center',alignItems: 'center', marginBottom:20, flexDirection: 'row', backgroundColor:'#B40404',   display:'flex', justifyContent:'center', borderRadius:40, width:wp(18), height:wp(18)   }} activeOpacity={0.6}>
      <Text style={{fontSize:18, fontWeight:'bold',  color: 'white', display:'flex', justifyContent: 'center',alignItems: 'center',}}><AntDesign name="arrowright" size={24} color="white" /></Text>
      </TouchableOpacity>
     
    </View>
  )
}

export default NextButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})
