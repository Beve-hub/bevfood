import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';


const index = () => {
    const router = useRouter();

   
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <Image source={require('../assets/images/logo.png')} style={styles.lego}/>
      <Text style={styles.logo}>BEVE FOOD</Text>
      
      <TouchableOpacity style={styles.btn}
      onPress={() => router.push('./screen/Onboarding')}>
      
        <Text style={styles.start}>Get Started</Text>
      </TouchableOpacity>

    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#B40404",
        alignItems: "center"
    },
    lego: {
        height: wp(60),
        width: wp(60)
    },
    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    btn: {
        
        height: hp(7),
        width: wp(70),
        justifyContent: 'center',
        display: 'absolute',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderSize: 2,
        borderRadius: 100,
        top: 150
    },
    start: {
        fontSize: hp(3),
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    }

})