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


const DashboardStack = createStackNavigator({
  Dashboard: DashboardScreen,
  Home: HomeScreen,
  Request: MyRequestScreen,

  CutiScreen: CutiScreen,
  CutiDetail: CutiDetailScreen,
  CutiForm: CutiFormScreen,

  CheckIn: CheckInScreen
},{
  initialRouteName:'Dashboard',
  headerMode:'none'
})

const UserStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
}, {
    initialRouteName: 'Login',
    headerMode: 'none'
  })

export default Main = createAppContainer(createSwitchNavigator({
  Navigasi: UserStack,
  Home: DashboardStack
}, {
    initialRouteName: 'Navigasi',
  })
);