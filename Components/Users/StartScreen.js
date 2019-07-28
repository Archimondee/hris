import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Constants} from 'expo';
import {Button} from 'native-base';

export default class StartScreen extends Component {
  render() {
    return (
      <View style={{flex:1, paddingTop:Constants.statusBarHeight}}>
        <View style={{flex:2.5, paddingLeft:15, paddingRight:15}}>
          <View style={{paddingTop:110}}>
            <Text style={{ fontSize: 32 }}>
              HRIS Mobile
            </Text>
          </View>
          <View style={{paddingTop:20}}>
            <Text style={{ fontSize: 25 }}>
              Selamat datang di 
            </Text>
            <Text style={{ fontSize: 25 }}>
              Aplikasi HRIS Mobile
            </Text>
          </View>
        </View>
        <View style={{flex:1, paddingLeft:15, paddingRight:15}}>
          <Button block style={{marginBottom:10, backgroundColor:'#2F954E'}} onPress={()=>this.props.navigation.navigate('Login')}>
            <Text style={{color:'white'}}>Login</Text>
          </Button>
          <Button block style={{backgroundColor:'#2F954E'}} onPress={()=>this.props.navigation.navigate('Register')}>
            <Text style={{color:'white'}}>Register</Text>
          </Button>
        </View>
      </View>
    )
  }
}
