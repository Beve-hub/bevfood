import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter} from  'expo-router'

const Method = () => {
    const router = useRouter();
    const item = useLocalSearchParams();
  return (
    <View>
      <Text>Method</Text>
    </View>
  )
}

export default Method