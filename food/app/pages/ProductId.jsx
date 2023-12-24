import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter} from  'expo-router'
import { Fooddetails } from '../../components/Foodtype'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ProductId = () => {
    const router = useRouter();
    const item = useLocalSearchParams();
    const [food, setFood] = useState(Fooddetails);
  return (
    <View style={{justifyContent: 'center', paddingVertical: 30, paddingHorizontal:10}}>
      <Text>Hi Believe! View Your Cart</Text>
       <Text>{item.name}</Text>
       <Image source={item.image} style={{height: wp(70), width: wp(91)}}/>
       <View>
        <Text>Description</Text>
        <Text>{item.title}</Text>
       </View>
       <View>
        <Text>Checkout</Text>
        <Text>{item.Price}</Text>
       </View>
    </View>
  )
}

export default ProductId