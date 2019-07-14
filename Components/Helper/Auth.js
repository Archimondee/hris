import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form, Button, Item, Label, Input } from "native-base";
import {View, Text, StyleSheet, AsyncStorage } from 'react-native';
import PickerModal from 'react-native-picker-modal-view';
import data from './Test.json';

import getEnvVars from './Config';
const {apiUrl} = getEnvVars();

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {},
      pswd : '',
      data: []
    };
  }

  selected(selected) {
    this.setState({
      selectedItem: selected
    })
  }

  onClosed() {
    console.log('close key pressed');
  }

  onSelected(selected) {
    this.setState({ selectedItem: selected });

    return selected;
  }

  onBackButtonPressed() {
    console.log('back key pressed');
  }

  _getLink(){
    const {selectedItem, pswd} = this.state;
    fetch(`${apiUrl}/getLink.php`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        kode_perusahaan: selectedItem.Code,
        password : pswd
      })
    }).then((response) => response.json())
        .then((responseJson => {
          this.setState({
            data: responseJson
          })

          i = 0;
          for(i=0;i<2;i++){
            if(responseJson[i].nama_proses == 'Login'){
              login = responseJson[i].nama_server
            }
            if(responseJson[i].nama_proses == 'Register'){
              register = responseJson[i].nama_server
            }
          }

          const Link = {
            login: login,
            register: register
          }
          AsyncStorage.setItem('Link', JSON.stringify(data));
    }))
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <View style={styles.container}>
          <View>
            <Text>Silahkan pilih kode perusahaan</Text>
          </View>
          <View style={{paddingTop:10}}>
            <PickerModal
              onSelected={this.onSelected.bind(this)}
              onClosed={this.onClosed.bind(this)}
              onBackButtonPressed={this.onBackButtonPressed.bind(this)}
              items={data}
              sortingLanguage={'tr'}
              showToTopButton={true}
              selected={selectedItem}
              autoGenerateAlphabeticalIndex={true}
              selectPlaceholderText={'Pilih Perusahaan'}
              onEndReached={() => console.log('list ended...')}
              searchPlaceholderText={'Pilih Perusahaan'}
              requireSelection={true}
              autoSort={true}
            />
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry onChangeText={(password)=>this.setState({pswd:password})}/>
            </Item>
          </View>
          <View style={{paddingTop:10}}>
            <Button onPress={()=>this._getLink()} primary style={{ height: 50, width: 200, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white' }}>Submit</Text>
            </Button>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});