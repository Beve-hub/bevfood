import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import All from './All'
import Soup from './Soup'
import Jollof from './Jollof'
import Drinks from './Drinks'
import Protein from './Protein'
 


const Tab = createMaterialTopTabNavigator();

const Control = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', width:90,  },
      tabBarActiveTintColor: '#B40404' ,
      tabBarInactiveTintColor: '#9A9A9A',
      tabBarItemStyle: { width: 70 },
      tabBarPressColor: '#FAD7D7',
      tabBarIndicatorStyle: { backgroundColor: '' },
      tabBarShadowVisible: false
    }}>
      <Tab.Screen name="All" component={All}  />
      <Tab.Screen name="Soup" component={Soup} />
      <Tab.Screen name="Protein" component={Protein} />
      <Tab.Screen name="Jollof" component={Jollof} />
      <Tab.Screen name="Drinks" component={Drinks} />
    </Tab.Navigator>
  )
}
 
export default Control

const styles = StyleSheet.create({})