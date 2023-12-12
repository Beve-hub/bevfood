import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';

const Board = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/onboarding4.png')} style={styles.lego}/>
      <Text style={styles.logo}>Quick and fast delivery to your door step.</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.start}><Image source={require('../../assets/images/google.png')} style={styles.top}/>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bop}>
        <Text style={styles.starp}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.lop}>
      <Text >Already  have an account?
       <TouchableOpacity style={styles.dope}>
        <Text style={styles.step}>Sign In</Text>
       </TouchableOpacity>
      </Text>
      </View>
    </View>
  )
}

export default Board

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lego: {
        height: wp(70),
        width: wp(70)
    },
    logo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#121212',
        width: wp(90),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20
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
        borderRadius: 70,
        top: 80
    },
    start: {
        fontSize: hp(2.5),
        fontWeight: 'medium',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        gap: 5,
    },
    

    bop: {
        
        height: hp(7),
        width: wp(70),
        justifyContent: 'center',
        display: 'absolute',
        alignItems: 'center',
        backgroundColor: "#B40404",
        borderColor: 'black',
        borderSize: 2,
        borderRadius: 80,
        top: 80,
        marginTop: 10,

    },
    

    starp: {
        fontSize: hp(2.5),
        fontWeight: 'medium',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        color: 'white'
    },
    lop: {
        display: 'flex',
        justifyContent: 'around',
        alignItems: 'center',
        borderColor: 'black',
        textAlign: 'center',
        top: 80,
        marginTop: 10,
    },

    step: {
        color:  "#B40404",
        fontWeight: 'bold',

    }
})