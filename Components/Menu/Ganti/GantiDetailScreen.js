import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from 'react-native';
import {
  Form,
  Item,
  Input,
  Label,
  Button,
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Body,
  Left,
  Right,
  Textarea,
  List,
  ListItem,
  DatePicker,
} from 'native-base';
import Reinput, {ReinputButton} from 'reinput';
import {Ionicons} from 'react-native-vector-icons';
import {SearchBar} from 'react-native-elements';

export default class GantiDetailScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  getDatetime () {
    var today = new Date ();
    var dd = today.getDate ();

    var mm = today.getMonth () + 1;
    var yyyy = today.getFullYear ();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    var time = today.toLocaleTimeString ();

    today = yyyy + '-' + mm + '-' + dd + ' ' + time;
    console.log (today);
    return today;
  }

  render () {
    const {width, height} = Dimensions.get ('window');
    return (
      <View style={{paddingTop: 30, flex: 1}}>
        <View
          style={{
            height: 60,
            width: width,
            flexDirection: 'row',
            backgroundColor: '#dedede',
          }}
        >
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack ()}
              style={{paddingLeft: 0}}
            >
              <Ionicons name="ios-arrow-back" size={32} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1.2,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{fontWeight: 'bold', fontSize: 20}}>HRIS</Text>
          </View>
          <View style={{flex: 0.25}} />
        </View>
        <View style={{flex: 1, backgroundColor: '#dedede'}}>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{fontSize: 30, color: 'red'}}>
              <Ionicons
                name="ios-close-circle-outline"
                size={30}
                color="red"
              />
              {' '}
              Ditolak
            </Text>
            <Text>29 April 2019, 16.00 </Text>
          </View>
        </View>
        <View style={{flex: 4.5, paddingLeft: 15, paddingRight: 15}}>
          <ScrollView
            style={{flex: 1, paddingTop: 10}}
            showsVerticalScrollIndicator={false}
          >
            <ReinputButton
              label="Nama Pegawai"
              value="Gilang Aditya R"
              underlineColor="#2E7D32"
              underlineHeight={2}
              underlineActiveHeight={2}
              labelActiveColor="#2E7D32"
              labelColor="#2E7d32"
              //onPress={/* whatever callback */}
            />
            <ReinputButton
              label="Tanggal Pembuatan"
              value={this.getDatetime ()}
              underlineColor="#2E7D32"
              underlineHeight={2}
              underlineActiveHeight={2}
              labelActiveColor="#2E7D32"
              labelColor="#2E7d32"
              //onPress={/* whatever callback */}
            />
            <ReinputButton
              label="Tipe Penggantian"
              value="Ganti Kacamata"
              underlineColor="#2E7D32"
              underlineHeight={2}
              underlineActiveHeight={2}
              labelActiveColor="#2E7D32"
              labelColor="#2E7d32"
              //onPress={/* whatever callback */}
            />
            <ReinputButton
              label="Deskripsi"
              value="Kacamata Pecah"
              underlineColor="#2E7D32"
              underlineHeight={2}
              underlineActiveHeight={2}
              labelActiveColor="#2E7D32"
              labelColor="#2E7d32"
              //onPress={/* whatever callback */}
            />
            <ReinputButton
              label="Jumlah"
              value="1 Buah"
              underlineColor="#2E7D32"
              underlineHeight={2}
              underlineActiveHeight={2}
              labelActiveColor="#2E7D32"
              labelColor="#2E7d32"
              //onPress={/* whatever callback */}
            />
          </ScrollView>

        </View>

      </View>
    );
  }
}
