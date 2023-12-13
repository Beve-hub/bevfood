import { FlatList, ScrollView, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import React,{useRef, useState} from 'react'
import Slides from '../../components/Slides'
import OnboardItem from './OnboardItem'
import Paginator from './Paginator'
import NextButton from './NextButton'
import { useRouter } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen'
import {Stack} from 'expo-router';


const Onboarding = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [current, setCurrent] = useState(0);
    const router = useRouter();

    const SlidesRef = useRef(null);
    

    const scrollTo = () => {
        if (current > Slides.length - 1) {
          SlidesRef.current.scrollToIndex({ index: current + 1 });
        } else {
          console.log('Last item.');
        }
      };
  return (
    
    <View style={styles.container}>
        <Stack.Screen
       options={{
        headerShown: false
       }}
      />
        
        <ScrollView  >
    
          <FlatList
          data={Slides}
          ref={SlidesRef} 
          renderItem={({ item }) => <OnboardItem item={item}/>} 
          horizontal={true}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX }}}], {
            useNativeDriver: false,
          })}
          />
        </ScrollView>
        <Paginator data={Slides} scrollX={scrollX}/>
          <NextButton scrollTo={scrollTo}/>
          <TouchableOpacity onPress={() => router.push('../screen/auth/login/Login')} style={styles.skip} activeOpacity={0.6}>
           <Text style={styles.skip} >Skip</Text>
          </TouchableOpacity>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    skip: {
      position: 'absolute',
      color:  "#B40404",
      borderRadius: 100,
      left: 20,
      fontWeight: 'bold',
      fontSize: 15,
      bottom: 20,
   }
})

