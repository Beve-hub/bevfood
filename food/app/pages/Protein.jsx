import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import { data } from './../../components/proteinType';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';             

const Protein = () => {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);

  //update the state function
  const updateCartCount = (count) => {
    setCartCount(count);
};

  //add item to count list
  const addItemToCart = () => {
    setCartCount(cartCount + 1);
   };
  
  return (
    <View>
     <FlatList
     data={data}
     keyExtractor={item=> item.name}
     showsVerticalScrollIndicator={false}
     renderItem={({item, index}) => <FoodAll addItem={addItemToCart} count={cartCount} router={router} index={index} item={item} />}
     />
    </View>
  )
}

export default Protein

const FoodAll =({item,router,index, addItem}) => {
 
  return (
    <View style={{justifyContent: 'center', paddingVertical: 30, paddingHorizontal:10}}>
        
        <Text style={{paddingBottom:20, fontWeight:'semiBold', fontSize: 18 }}>{item.name}</Text>
        <TouchableOpacity>
        <Image source={item.image} style={{height: wp(70), width: wp(91)}}/>
        </TouchableOpacity>
        <View style={{backgroundColor:'#121212', height: 60, width: wp(91),  display: 'absolute', bottom: 40,}}>
          <Text style={{color:'white', fontSize:20, fontWeight:'bold', paddingTop:10, paddingLeft: 20}}>{item.Price}</Text>
        </View>
        <View style={{flexDirection:'row', display: 'absolute',bottom: 120, left:240}}>
          <TouchableOpacity style={{backgroundColor: 'white', padding: 10, borderRadius: 100, marginRight:10 }}>
          <MaterialIcons name="favorite" size={24} color="#B40404" />
          </TouchableOpacity>

          <TouchableOpacity onPress={addItem} style={{backgroundColor: 'white', padding: 10, borderRadius: 100 }}>
          <Entypo name="shopping-cart" size={24} color="#B40404" />
          </TouchableOpacity>
         
          
        </View>
      </View>
  )
}