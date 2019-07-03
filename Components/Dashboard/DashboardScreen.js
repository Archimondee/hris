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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eeba19', paddingTop: 30 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#eeba19"
        />
        <Header hasTabs style={{ backgroundColor: '#eeba19' }}>
          <Body style={{ width: 200, flexWrap: 'nowrap' }}>
            <Text style={{ fontSize: 18, color: '#4f331b', fontWeight: 'bold' }}>HRIS Mobile</Text>
          </Body>
          <Right>
            <TouchableOpacity>
              <Ionicons name="ios-settings" size={30} color="#4f331b" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Tabs >
          <Tab heading={<TabHeading style={{ backgroundColor: '#eeba19' }} tabStyle={{ backgroundColor: '#eeba19' }} activeTabStyle={{ backgroundColor: '#eeba19' }} ><Text style={{color:'#4f331b'}}>Menu</Text></TabHeading>}>
            <HomeScreen navigation={navigation} />
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: '#eeba19' }} tabStyle={{ backgroundColor: '#eeba19' }} activeTabStyle={{ backgroundColor: '#eeba19' }}><Text style={{color:'#4f331b'}}>My Request</Text></TabHeading>}>
            <MyRequestScreen navigation={navigation} />
          </Tab>
        </Tabs>
      </SafeAreaView>
    );
  }
}
