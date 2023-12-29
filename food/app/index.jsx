import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import {Stack} from 'expo-router';

const Splash = () => {
    const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsLoading(false);
      router.push('./screen/Onboarding'); // Use 'replace' to prevent going back to the splash screen
    }, 2000);

    // Clear the timer if the component is unmounted before the timeout
    return () => clearTimeout(startTimer);
  });

  return (
    <View style={styles.container}>
        <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Image source={require('../assets/images/logo.png')} style={styles.lego} />
      <Text style={styles.logo}>Beve Food</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#B40404'
  },
  lego: {
    height: wp(70),
    width: wp(70),
    
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    width: wp(90),
    textAlign: 'center',
    marginTop: 20,
    color: '#ffff',
  },
});
