import React, { Component } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { Card, CardItem, Form, Item, Input, Header, Left, Body, Right, Icon, Button, Title, Label} from 'native-base';
import { Constants} from 'expo';
import { Ionicons } from 'react-native-vector-icons';
import Reinput, { ReinputButton } from 'reinput';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
        <View style={{ flex: 1, paddingTop: Constants.statusBarHeight,}}>
        <ImageBackground source={require('../../assets/bg.jpeg')} style={{width:'100%', height:'100%'}}>
          <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
            <View style={{flex:1.5, }}>
            
          </View>
          
          <Card style={{ flex: 1.7, borderTopLeftRadius: 15, borderTopRightRadius: 15, marginRight:5, marginLeft:5 }}>
          
            <View style={{ height: 100, paddingTop: 10, alignContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 22 }}>Welcome!</Text>
              <Text style={{ fontSize: 18 }}>Please, login to continue</Text>
            </View>
            <View style={{ paddingLeft: 20, paddingRight: 20 }}>
              <Reinput
                label='Username'
              />
              <Reinput
                label='Password'
              />
            </View>
            <Button block style={{ margin: 20, backgroundColor:'#2F954E' }} onPress={()=>this.props.navigation.navigate('Dashboard')}>
              <Text style={{ color: 'white' }}>Login</Text>
            </Button>
          </Card>
          </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      
      
    );
  }
}
