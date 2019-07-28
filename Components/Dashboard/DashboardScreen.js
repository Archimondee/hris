import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  StatusBar,
  Platform,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Body, Left, Right } from 'native-base';
import { Ionicons } from 'react-native-vector-icons';


import HomeScreen from './HomeScreen';
import MyRequestScreen from './MyRequestScreen';

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#2F954E', paddingTop: 30,}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="white"
        />
        <Header hasTabs style={{ backgroundColor: '#2F954E'}}>
          <Body style={{ width: 200, flexWrap: 'nowrap' }}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>HRIS Mobile</Text>
          </Body>
          <Right>
            <TouchableOpacity>
              <Ionicons name="ios-settings" size={30} color="white" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Tabs >
          <Tab heading={<TabHeading style={{ backgroundColor: '#2F954E' }} tabStyle={{ backgroundColor: '#2F954E', }} activeTabStyle={{ backgroundColor: '#2F954E' }} ><Text style={{color:'white'}}>Menu</Text></TabHeading>}>
            <HomeScreen navigation={navigation} />
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: '#2F954E' }} tabStyle={{ backgroundColor: '#2F954E' }} activeTabStyle={{ backgroundColor: '#2F954E' }}><Text style={{color:'white'}}>My Request</Text></TabHeading>}>
            <MyRequestScreen navigation={navigation} />
          </Tab>
        </Tabs>
      </SafeAreaView>
    );
  }
}
