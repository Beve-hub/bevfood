import { View, Text } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitle: '',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#F5F5F5',
        }
      }}
    />
  )
}

export default _layout