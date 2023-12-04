import { FlatList, ScrollView, StyleSheet, Text, View, Animated } from 'react-native'
import React,{useRef, useState} from 'react'
import Slides from '../../components/Slides'
import OnboardItem from './OnboardItem'
import Paginator from './Paginator'


const Onboarding = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [current, setCurrent] = useState(0);

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={styles.container}>
        <ScrollView  >
    
          <FlatList data={Slides} 
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
        <Paginator data={Slides}/>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

