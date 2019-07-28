import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

export default class GettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{ flex: 1.8, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
          <View style={{ height: 200, width: 200, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1}}>
            <Text>Logo HRIS </Text>
          </View>
        </View>
        <View style={{flex:1, alignContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:30}}>Welcome!</Text>
          <Text style={{fontSize:18}}>Silahkan untuk memulai</Text>
          <Button block style={{ alignContent:'center', margin:30, backgroundColor:'#2F954E'}} onPress={()=>this.props.navigation.navigate('Auth')}>
            <Text style={{color:'white'}}>
              Get Started
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}
