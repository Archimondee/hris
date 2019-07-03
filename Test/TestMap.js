import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import {Card, Header, Button, Form, Textarea} from 'native-base';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from 'react-native-vector-icons';
import Reinput, { ReinputButton } from 'reinput';




export default class TestMap extends Component {
  state = {
    mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    locationResult: null,
    location: { coords: { latitude: 37.78825, longitude: -122.4324 } },
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _getDatetime() {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    var time = today.toLocaleTimeString();

    today = yyyy + '-' + mm + '-' + dd + ' ' + time;
    console.log(today);
    return today;
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
        location,
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location), location, });
  };

  render() {
    const {height, width} = Dimensions.get('window');
    return (
      <View style={{flex:1, paddingTop:Constants.statusBarHeight}}>
        <View style={{ height: 60, width: width, flexDirection: 'row', backgroundColor: '#eeba19' }}>
          <View style={{ flex: 0.4, justifyContent: 'center', alignContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 15 }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingLeft: 0 }}>
              <Ionicons name="ios-arrow-back" size={32} color="#4f331b" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1.5, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#4f331b' }}>Form Izin Lainnya</Text>
          </View>
          <View style={{ flex: 0.6, justifyContent: 'space-around', alignContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          </View>
        </View>
        <View style={{flex:1, marginLeft:10, marginRight:10, marginTop:10}}>
          <Card style={{ height: 200 }}>
            <MapView
              style={{ height: 200, alignSelf: 'stretch' }}
              provider="google"
              region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.000922, longitudeDelta: 0.000421 }}
              onRegionChange={this._handleMapRegionChange}
            >
              <MapView.Marker
                coordinate={this.state.location.coords}
                title="My Marker"
                description="Some description"
              />
            </MapView>
          </Card>
          <View style={{justifyContent:'flex-end', alignSelf:'flex-end', paddingTop:10}}>
            <Button onPress={() => this._getLocationAsync()} style={{ width: 140, justifyContent: 'center', alignItems: 'center', backgroundColor:'#4f331b'}}>
              <Text style={{textAlign:'center', color:'white'}}>Find My Location</Text>
            </Button>
          </View>
          <View style={{flex:1}}>
            <ScrollView style={{ paddingTop: 10, flex: 1 }}>
              <Form>
                <ReinputButton
                  label='Nama Pegawai'
                  value='Gilang Aditya R'
                  underlineColor="#4f331b"
                  underlineHeight={2}
                  underlineActiveHeight={2}
                  labelActiveColor='#4f331b'
                  labelColor='#4f331b'
                //onPress={/* whatever callback */}
                />
                <ReinputButton
                  label='Tipe'
                  value='Izin Lainnya'
                  underlineColor="#4f331b"
                  underlineHeight={2}
                  underlineActiveHeight={2}
                  labelActiveColor='#4f331b'
                  labelColor='#4f331b'
                //onPress={/* whatever callback */}
                />
                <ReinputButton
                  label='Tanggal Izin'
                  value={this._getDatetime()}
                  underlineColor="#4f331b"
                  underlineHeight={2}
                  underlineActiveHeight={2}
                  labelActiveColor='#4f331b'
                  labelColor='#4f331b'
                //onPress={/* whatever callback */}
                />
                <Textarea rowSpan={3} bordered placeholder="Alasan" />
              </Form>
              <View style={{paddingTop:10}}>
                <Button block style={{ backgroundColor:'#4f331b'}}>
                  <Text style={{color:'white'}}>Submit</Text>
                </Button>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}


