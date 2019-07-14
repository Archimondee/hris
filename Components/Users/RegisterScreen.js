import React, {Component} from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {
  Card,
  CardItem,
  Form,
  Item,
  Input,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Button,
  Title,
  Label,
} from 'native-base';
import {Constants} from 'expo';
import {Ionicons} from 'react-native-vector-icons';
import Reinput, {ReinputButton} from 'reinput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class RegisterScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Constants.statusBarHeight,
          backgroundColor: 'gray',
        }}
      >

        <View style={{flex: 1}} />
        <Card
          style={{flex: 2.2, borderTopLeftRadius: 15, borderTopRightRadius: 15}}
        >
          <KeyboardAwareScrollView>
            <View
              style={{
                height: 100,
                paddingTop: 10,
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{fontSize: 22}}>Welcome!</Text>
              <Text style={{fontSize: 18}}>Please, register to continue</Text>
            </View>
            <View style={{paddingLeft: 20, paddingRight: 20}}>
              <Reinput label="Nama" />
              <Reinput label="No Telpon" />
              <Reinput label="Email" />
              <Reinput label="Username" />
              <Reinput label="Password" />
              <Reinput label="Confirm Password" />
            </View>
            <Button block style={{margin: 20}}>
              <Text style={{color: 'white'}}>Login</Text>
            </Button>
          </KeyboardAwareScrollView>
        </Card>

      </View>
    );
  }
}
