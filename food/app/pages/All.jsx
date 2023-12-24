import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import { data } from './../../components/Foodtype';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const All = () => {
  const router = useRouter();

  
  return (
    <View>
     <FlatList
     data={data}
     keyExtractor={item=> item.name}
     showsVerticalScrollIndicator={false}
     renderItem={({item, index}) => <FoodAll router={router} index={index} item={item} />}
     />
    </View>
  )
}

export default All

const FoodAll =({item,router,index, }) => {
  
  return (
    <View style={{justifyContent: 'center', paddingVertical: 30, paddingHorizontal:10}}>
        
        <Text style={{paddingBottom:20, fontWeight:'semiBold', fontSize: 18 }}>{item.name}</Text>
        <TouchableOpacity onPress={() => router.push({pathname: '../pages/ProductId', params: item})}>
        <Image source={item.image} style={{height: wp(70), width: wp(91)}}/>
        </TouchableOpacity>
        <View style={{backgroundColor:'#121212', height: 60, width: wp(91),  display: 'absolute', bottom: 40,}}>
          <Text style={{color:'white', fontSize:20, fontWeight:'bold', paddingTop:10, paddingLeft: 20}}>{item.Price}</Text>
        </View>
        <View style={{flexDirection:'row', display: 'absolute',bottom: 120, left:220}}>

          <TouchableOpacity style={{backgroundColor: 'white', padding: 10, borderRadius: 100 }}>
          <MaterialIcons name="favorite" size={24} color="#B40404"/>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor: 'white',marginLeft:10, padding: 10, borderRadius: 100 }}>
          <Entypo name="shopping-cart" size={24} color="#B40404" />
          </TouchableOpacity>
         
          
        </View>
      </View>
  )
}