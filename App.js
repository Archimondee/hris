import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Main from './Components/Routes/Routes';
import TestMap from './Test/TestMap';

import Auth from './Components/Helper/Auth';

import GettingScreen from './Components/Started/GettingScreen'; //Done
import LoginScreen from './Components/Users/LoginScreen'; //Done
import RegisterScreen from './Components/Users/RegisterScreen'; //Done
import StartScreen from './Components/Users/StartScreen'; //Done

export default function App() {
  return (
    <StartScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
