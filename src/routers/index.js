import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import{ createNativeStackNavigator } from '@react-navigation/native-stack';
import home from '../pages/Home';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
      </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})