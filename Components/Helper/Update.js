import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import {Linking} from 'expo';
import getEnvVars from './Config';
//import console = require('console');
const {apiUrl, versi} = getEnvVars ();

import Loader from '../Widget/Loader';


export default class Update extends Component {
  constructor(props) {
    super(props);
    //AsyncStorage.clear();
    this.checkUpdate();
    this.state = {
      loading: true,
      atas: 'Checking version',
      bawah: 'Please wait',
    };
  }

  redir=()=>{
    console.log("HELLO");
    this.props.navigation.navigate('Login');
  }

  checkUpdate(){
    AsyncStorage.getItem('Version').then((value)=>{
      let version = JSON.parse(value);
      if(version!=null){

        // setTimeout (() => {
        //   //console.log ('hello 1');
        //   this.setState ({
        //     loading: true,
        //   });
        // });

        //console.log(version);

        id_perusahaan = version.id_perusahaan
        api = version.api
        app = version.app

        fetch (`${apiUrl}/check_version.php`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify ({
            id_perusahaan: id_perusahaan,
            api : api,
            app: app
          }),
        })
          .then (response => response.json ())
          .then (responseJson => {
            //Check API Version
            if(responseJson[0].api.info == 'stable'){
              api_updated = api;
            }else{
              //Modal api need update
              //Update link api
              
              api_updated = responseJson[0].api.version
              
              AsyncStorage.removeItem('Link',(err)=>{
                 i = 0;
                 for(i=0;i<2;i++){
                   if(responseJson[0].api.data[i].remarks == 'Login'){
                     login = responseJson[0].api.data[i].link
                   }
                   if(responseJson[0].api.data[i].remarks == 'Register'){
                     register = responseJson[0].api.data[i].link
                   }
                 }
                 const Link={
                   login: login,
                   register: register
                 }
                 //alert('Berhasil');
                 //console.log("LINK"+Link)
                 AsyncStorage.setItem('Link', JSON.stringify(Link));
              })

            }

            //Check APP Version
              if(responseJson[1].app.info == 'stable'){
                  app_updated = app;
                  //console.log('Hello');
                  setTimeout (() => {
                  //console.log ('hello 1');
                      this.setState ({
                        atas:'Checking version',
                        bawah:'Done'
                      });
                    }, 1000);
                    setTimeout (() => {
                  //console.log ('hello 1');
                      this.setState ({
                        loading: false
                      });
                      this.props.navigation.navigate('Login');
                    }, 1500);

                  //rewrite db Version App
                  const Version={
                    api:api_updated,
                    app:versi,
                    id_perusahaan:id_perusahaan
                  }
                  console.log(Version);

                  AsyncStorage.removeItem('Version',(err)=>{
                    AsyncStorage.setItem('Version', JSON.stringify(Version));
                  })
              }else{
                //modal app need update
                setTimeout (() => {
                //console.log ('hello 1');
                    this.setState ({
                      
                      atas: 'Oops, older version',
                      bawah: 'Redirect',
                    });
                  }, 1500);

                  setTimeout (() => {
                //console.log ('hello 1');
                    this.setState ({
                      loading:false
                    });
                    Linking.openURL('https://playstore.com');
                  }, 2500);
              }
          })
          .catch (function (error) {
            alert ('Version Error : ' + error);
          });
      }else{
        console.log("Null");
      }
    }).catch((err)=>{
      alert(err);
    })
  }

  componentDidMount(){
    //this.checkUpdate();
    //this.redir();
  }

  render() {
    return (
      <View>
        <Loader
          loading={this.state.loading}
          atas={this.state.atas}
          bawah={this.state.bawah} />
      </View>
    );
  }
}
