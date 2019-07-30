import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Ionicons, SimpleLineIcons } from 'react-native-vector-icons';

import LoginScreen from '../Users/LoginScreen';
import RegisterScreen from '../Users/RegisterScreen';

import DashboardScreen from '../Dashboard/DashboardScreen';
import HomeScreen from '../Dashboard/HomeScreen';
import MyRequestScreen from '../Dashboard/MyRequestScreen';

import CutiDetailScreen from '../Menu/Cuti/CutiDetailScreen';
import CutiFormScreen from '../Menu/Cuti/CutiFormScreen';
import CutiScreen from '../Menu/Cuti/CutiScreen';

import CheckInScreen from '../Check/CheckInScreen';

import GantiScreen from '../Menu/Ganti/GantiScreen';
import GantiFormScreen from '../Menu/Ganti/GantiFormScreen';
import GantiDetailScreen from '../Menu/Ganti/GantiDetailScreen';

import GettingScreen from '../Started/GettingScreen';
import StartScreen from '../Users/StartScreen';
import Auth from '../Helper/Auth';

const StartedStack = createStackNavigator({
  Getting: GettingScreen,
  
  Auth: Auth
},{
  initialRouteName:'Getting',
  headerMode:'none'
})

const DashboardStack = createStackNavigator({
  Dashboard: DashboardScreen,
  Home: HomeScreen,
  Request: MyRequestScreen,

  CutiScreen: CutiScreen,
  CutiDetail: CutiDetailScreen,
  CutiForm: CutiFormScreen,

  CheckIn: CheckInScreen,

  GantiScreen: GantiScreen,
  GantiDetail: GantiDetailScreen,
  GantiForm: GantiFormScreen
},{
  initialRouteName:'Dashboard',
  headerMode:'none'
})

const UserStack = createStackNavigator({
  Mulai: StartScreen,
  Login: LoginScreen,
  Register: RegisterScreen
}, {
    initialRouteName: 'Mulai',
    headerMode: 'none'
  })

//Testing ---
// const CutiStack = createStackNavigator({
//   CutiScreen: CutiScreen,
//   CutiDetail: CutiDetailScreen,
//   CutiForm: CutiFormScreen,
// },{
//   initialRouteName:'CutiScreen',
//   headerMode:'none'
// });

// const GantiStack = createStackNavigator({
//   GantiScreen: GantiScreen,
//   GantiDetail: GantiDetailScreen,
//   GantiForm: GantiFormScreen
// },{
//    initialRouteName:'GantiScreen',
//    headerMode:'none'
//  });

//End Testing

export default Main = createAppContainer(createSwitchNavigator({
  
  Awal: StartedStack,
  Users: UserStack,
  Dash: DashboardStack
}, {
    initialRouteName: 'Awal',
  })
);