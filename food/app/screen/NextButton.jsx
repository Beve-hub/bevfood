import { StyleSheet, Text, TouchableOpacity, View ,  Animated} from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Ionicons } from '@expo/vector-icons';



const NextButton = ({scrollTo}) => {
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = size / 2 + strokeWidth /2;
    const circumference = 2 * Math.PI * radius;
    const progressAnimation = useRef(new Animated.Value(0).current)
    const progressRef = useRef(null)

    
   

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
      <Text style={styles.button} >Next <Ionicons name="chevron-forward" size={24} color="black" /></Text>
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
        display: 'flex'
    },
    button: {
       position: 'absolute',
       color:  "#121212",
       left: 50,
       fontWeight: 'bold',
       bottom: 20,
       fontSize: 15,
       alignItems: 'center',
       display: 'flex',
       justifyContent: 'center',
    },
    
})
