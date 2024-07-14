import React from "react";
import { useState, useEffect } from "react";
import {Text, View,LogBox,StatusBar,SafeAreaView} from 'react-native';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
import Home from "./src/Home";
LogBox.ignoreAllLogs()


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen
          name="home"
          component={Home} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;



