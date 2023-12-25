import { View, Text, Button, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

const Incre = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
      setCount(count + 1);
   }

   const handleDecrease = () => {
    setCount(count - 1);
 }
  return (
    <View style={{paddingRight:20,flexDirection: 'row',   display:'flex', justifyContent:'space-between',alignItems:'center' }}>
        <TouchableOpacity onPress={handleDecrease} style={{ padding:10, backgroundColor:'#B40404',  borderRadius:10,color: 'white'  }}>
            <Text style={{fontWeight:'bold', color:'white'}}>-</Text>
        </TouchableOpacity>
        <Text style={{paddingHorizontal:7, fontWeight:'bold'}}>{count}</Text>
        <TouchableOpacity onPress={handleIncrease} style={{ padding:10, backgroundColor:'#B40404',  borderRadius:10,color: 'white'  }}>
            <Text style={{fontWeight:'bold', color:'white'}}>+</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Incre

