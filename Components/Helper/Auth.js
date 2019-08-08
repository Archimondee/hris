import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form, Button, Item, Label, Input } from "native-base";
import {View, Text, StyleSheet, AsyncStorage } from 'react-native';
import PickerModal from 'react-native-picker-modal-view';
import data from './Test.json';
import {Linking} from 'expo';

import getEnvVars from './Config';
const {apiUrl, versi} = getEnvVars();
import Loader from '../Widget/Loader';


export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {},
      username: '',
      pswd : '',
      dataLink: [],
      dataVersion: [],

      loading: false,
      atas: 'Checking version',
      bawah: 'Please wait',
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

  _createVersion(){
    const {selectedItem} = this.state;
    fetch(`${apiUrl}/get_version.php`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_perusahaan: selectedItem.Code,
      })
    }).then((response) => response.json())
        .then((responseJson => {
          this.setState({
            dataVersion: responseJson
          })

          this.setState({
            loading:true
          })
          
          i = 0;
          //how to counting this 
          for(i=0;i<1;i++){
            api_updated = responseJson[i].api_updated;
            app_updated = responseJson[i].app_updated;
            id_perusahaan = responseJson[i].id_perusahaan;
          }

          if(versi!=app_updated){
            setTimeout (() => {
          //console.log ('hello 1');
              this.setState ({
                
                atas: 'Oops, older version',
                bawah: 'Redirect',
              });
            }, 1000);

            setTimeout (() => {
          //console.log ('hello 1');
              this.setState ({
                loading:false
              });
              Linking.openURL('https://playstore.com');
            }, 1700);
          }else{
            setTimeout (() => {
          //console.log ('hello 1');
              this.setState ({
                
                atas: 'Checking version',
                bawah: 'Done',
              });
            }, 1000);

            setTimeout (() => {
          //console.log ('hello 1');
              this.setState ({
                loading:false
              });
            }, 1700);
            const Version = {
              api: api_updated,
              app: versi,
              id_perusahaan: id_perusahaan
            }
            AsyncStorage.setItem('Version', JSON.stringify(Version));
            this.props.navigation.navigate('Login');
          }

          
    })).catch(function(error){
      alert('Version Error : '+error);
    })
  }

  _getLink(){
    const {selectedItem, pswd, username} = this.state;
    fetch(`${apiUrl}/login_panel.php`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_perusahaan: selectedItem.Code,
        username: username,
        password:pswd
      })
    }).then((response) => response.json())
        .then((responseJson => {
          this.setState({
            dataLink: responseJson
          })
          i=0;
          for(i=0;i<2;i++){
            if(responseJson[i].remarks == 'Login'){
              login = responseJson[i].link
            }
            if(responseJson[i].remarks == 'Register'){
              register = responseJson[i].link
            }
          }
          const Link = {
            login: login,
            register: register
          }
          AsyncStorage.setItem('Link',JSON.stringify(Link));
          this._createVersion();
    })).catch(function(error){
      alert('Link : '+error);
    })
    
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <View style={styles.container}>
          
          <View>
            <Text style={{fontSize:20}}>Silahkan pilih kode perusahaan</Text>
          </View>
          <Loader
            loading={this.state.loading}
            atas={this.state.atas}
            bawah={this.state.bawah} />
          <View style={{paddingTop:10, width:'100%'}}>
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
              <Label>Username</Label>
              <Input secureTextEntry onChangeText={(username)=>this.setState({username:username})}/>
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry onChangeText={(password)=>this.setState({pswd:password})}/>
            </Item>
          </View>
          <View style={{paddingTop:20}}>
            <Button style={{ height: 50, width: 200, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2F954E' }} onPress={()=>this._getLink()}>
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
    width:'100%',
    paddingLeft:15, paddingRight:15
  },
});