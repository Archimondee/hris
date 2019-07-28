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
  Animated,
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
  Text,
  Body,
  Left,
  Right,
  Textarea,
  DatePicker,
} from 'native-base';
import {Ionicons} from 'react-native-vector-icons';
import Reinput, {ReinputButton} from 'reinput';
import PickerModal from 'react-native-picker-modal-view';
import data from './Ganti.json';
const list = [
  {Id: 1, Name: 'Test1 Name', Value: 'Test1 Value'},
  {Id: 2, Name: 'Test2 Name', Value: 'Test2 Value'},
  {Id: 3, Name: 'Test3 Name', Value: 'Test3 Value'},
  {Id: 4, Name: 'Test4 Name', Value: 'Test4 Value'},
];

export default class GantiFormScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {
      selectedItem: {},
      pswd: '',
      data: [],
    };
  }
  setDate (newDate) {
    this.setState ({chosenDate: newDate});
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

  selected (selected) {
    this.setState ({
      selectedItem: selected,
    });
  }

  onClosed () {
    console.log ('close key pressed');
  }

  onSelected (selected) {
    this.setState ({selectedItem: selected});

    return selected;
  }

  onBackButtonPressed () {
    console.log ('back key pressed');
  }

  render () {
    const {height, width} = Dimensions.get ('window');
    const {selectedItem} = this.state;
    return (
      <View style={{flex: 1, paddingTop: 30}}>
        <Header hasTabs style={{backgroundColor: '#2F954E'}}>
          <Body
            style={{
              width: width - 100,
              flexWrap: 'nowrap',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack ()}
              style={{paddingLeft: 10, paddingRight: 30}}
            >
              <Ionicons name="ios-arrow-back" size={32} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                paddingTop: 5,
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Form Penggantian Baru
            </Text>
          </Body>
        </Header>
        <View
          style={{flex: 1, backgroundColor: '#2F954E', flexDirection: 'row'}}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                height: 50,
                width: 50,
                borderColor: 'white',
                borderWidth: 1,
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <Text style={{color: 'white'}}>Icon</Text>
            </View>
          </View>
          <View style={{flex: 3, justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Ganti Baru
            </Text>
          </View>
        </View>
        <View
          style={{flex: 7, paddingTop: 10, paddingLeft: 20, paddingRight: 20}}
        >
          <ReinputButton
            label="Tanggal"
            value={this.getDatetime ()}
            underlineColor="#2E7D32"
            underlineHeight={2}
            underlineActiveHeight={2}
            labelActiveColor="#2E7D32"
            labelColor="#2E7d32"
            //onPress={/* whatever callback */}
          />
          <Reinput
            label="Nama Pegawai"
            underlineDuration={200}
            activeColor="#2E7D32"
            //error={this.state.errNama}
            //onChangeText={nama => this.RuleNama (nama)}
          />
          <PickerModal
            onSelected={this.onSelected.bind (this)}
            onClosed={this.onClosed.bind (this)}
            onBackButtonPressed={this.onBackButtonPressed.bind (this)}
            items={data}
            sortingLanguage={'tr'}
            showToTopButton={true}
            selected={selectedItem}
            autoGenerateAlphabeticalIndex={true}
            selectPlaceholderText={'Pilih Jenis Penggantian'}
            onEndReached={() => console.log ('list ended...')}
            searchPlaceholderText={'Pilih Jenis Penggantian'}
            requireSelection={true}
            autoSort={true}
          />
          <Reinput
            label="Deskripsi"
            underlineDuration={200}
            activeColor="#2E7D32"
            //error={this.state.errNama}
            //onChangeText={nama => this.RuleNama (nama)}
          />
          <Reinput
            label="Jumlah"
            underlineDuration={200}
            activeColor="#2E7D32"
            //error={this.state.errNama}
            //onChangeText={nama => this.RuleNama (nama)}
          />
          
        </View>
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 20, justifyContent:'flex-end'}}>
            <View
              style={{
                flex: 1,
              }}
            >
              <Button
                style={{
                  width: 100,
                  justifyContent:'center',
                  alignSelf:'center',
                  backgroundColor:'#2F954E'
                }}
              >
                <Label style={{color: 'white'}}>Simpan</Label>
              </Button>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <Button
                style={{
                  width: 100,
                  justifyContent:'center',
                  alignSelf:'center',
                  backgroundColor:'#2F954E'
                }}
              >
                <Label style={{color: 'white'}}>Set Ulang</Label>
              </Button>
            </View>
          </View>

      </View>
    );
  }
}
