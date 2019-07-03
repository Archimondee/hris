import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Container, Header, Content, Item, Input, Icon, Form, Label, Button } from 'native-base';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, height: '100%', width: '100%', paddingTop: 30, backgroundColor: '#eeba19' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center', paddingTop: 30 }}>
          <Image source={require('../../assets/fmm.png')} />
        </View>
        <View style={{ flex: 3 }}>
          <Form style={{ paddingTop: 30, padding: 10 }}>
            <Item floatingLabel style={{ borderBottomWidth: 0 }} >
              <Label style={{ color: 'black' }}>No Telfon</Label>
              <Input style={{ borderBottomColor: 'black', borderBottomWidth: 2 }} />
            </Item>
            <Item floatingLabel style={{ borderBottomWidth: 0 }} >
              <Label style={{ color: 'black' }}>Username</Label>
              <Input style={{ borderBottomColor: 'black', borderBottomWidth: 2 }} />
            </Item>
            <Item floatingLabel style={{ borderBottomWidth: 0 }}>
              <Label style={{ color: 'black' }}>Password</Label>
              <Input style={{ borderBottomColor: 'black', borderBottomWidth: 2 }} />
            </Item>
            <Item floatingLabel style={{ borderBottomWidth: 0 }}>
              <Label style={{ color: 'black' }}>Confirm Password</Label>
              <Input style={{ borderBottomColor: 'black', borderBottomWidth: 2 }} />
            </Item>
          </Form>
          <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', paddingTop: 30 }}>
            <Button style={{ height: 50, width: 200, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4f331b' }}>
              <Text style={{ color: 'white' }}>Register</Text>
            </Button>
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: 10 }}>
              <Text style={{ fontSize: 16 }}>Already have an account ?</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{ fontSize: 16, color: 'white' }} >Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
