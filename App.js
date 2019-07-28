import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Main from './Components/Routes/Routes';
import TestMap from './Test/TestMap';

import Auth from './Components/Helper/Auth';

import GettingScreen from './Components/Started/GettingScreen'; //Done
import LoginScreen from './Components/Users/LoginScreen'; //Done
import RegisterScreen from './Components/Users/RegisterScreen'; //Done
import StartScreen from './Components/Users/StartScreen'; //Done
import DashboardScreen from './Components/Dashboard/DashboardScreen';

import GantiFormScreen from './Components/Menu/Ganti/GantiFormScreen'; //Done
import GantiScreen from './Components/Menu/Ganti/GantiScreen';
import GantiDetailScreen from './Components/Menu/Ganti/GantiDetailScreen';

import IzinFormScreen from './Components/Menu/Izin/IzinFormScreen';

export default function App() {
  return (
    <Main/>
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
