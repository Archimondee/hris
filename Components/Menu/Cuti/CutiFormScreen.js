import React, { Component } from 'react';
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
  Animated
} from 'react-native';
import { Form, Item, Input, Label, Button, Container, Header, Tab, Tabs, TabHeading, Icon, Text, Body, Left, Right, Textarea, DatePicker } from 'native-base';
import { Ionicons } from 'react-native-vector-icons';
import Reinput, { ReinputButton } from 'reinput';
import PickerModal from 'react-native-picker-modal-view';
import data from './Cuti.json';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const list = [
  { Id: 1, Name: 'Test1 Name', Value: 'Test1 Value' },
  { Id: 2, Name: 'Test2 Name', Value: 'Test2 Value' },
  { Id: 3, Name: 'Test3 Name', Value: 'Test3 Value' },
  { Id: 4, Name: 'Test4 Name', Value: 'Test4 Value' }
]

const { width, height } = Dimensions.get('window');

export default class CutiFormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',

      errNama: '',

      errTipe: '#757575',
      tipeMsg: '',
      statusTipe: 0,

      selectedItem: {},

      chosenDate: new Date(),

      flex1: new Animated.Value(0),
      height1: new Animated.Value(0),
      width1: new Animated.Value(0),
      opacity1: new Animated.Value(1),

      flex2: new Animated.Value(0),
      height2: new Animated.Value(0),
      width2: new Animated.Value(0),
      opacity2: new Animated.Value(0),

      status: 0
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  RuleNama(nama) {
    var err = '';
    if (nama == '') {
      err += 'Nama harus di isi\n';
    } else if (nama.length < 5) {
      err += 'Nama harus melebihi 5 huruf\n'
    } else {
      err = ''
    }
    this.setState({
      errNama: err,
      nama: nama
    })
  }

  RuleTipe(item) {
    if (item.id == 0) {
      this.setState({
        errTipe: '#fc1f4a',
        tipeMsg: 'Silahkan pilih tipe penggantian baru',
        statusTipe: 1
      });
    } else {
      this.setState({
        errTipe: '#2E7D32',
        statusTipe: 0
      })
    }
  }

  getDatetime() {
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

  _getNext = () => {
    Animated.timing(this.state.flex1, {
      toValue: 7,
      duration: 0
    }).start(() => {
      this.setState({
        status: 1,

        height1: height,
        width1: width,
      })
    })
  }

  _btnNext = () => {
    if (this.state.status == 1) {
      //Buka form 2 tutup form 1 
      //set status 2
      Animated.parallel([
        Animated.timing(this.state.flex1, {
          toValue: 0,
          duration: 1000
        }),
        Animated.timing(this.state.opacity1, {
          toValue: 0,
          duration: 1000
        }),
        Animated.timing(this.state.flex2, {
          toValue: 7,
          duration: 1000
        }),
        Animated.timing(this.state.opacity2, {
          toValue: 1,
          duration: 1000
        })
      ]).start(() => {
        this.setState({
          height1: 0,
          width1: 0,

          height2: height,
          width2: width,
          status: 2
        })
      });
    } else if (this.state.status == 2) {
      //Buka form 2 tutup form 1 
      //set status 2
      Animated.parallel([
        Animated.timing(this.state.flex2, {
          toValue: 0,
          duration: 1000
        }),
        Animated.timing(this.state.opacity2, {
          toValue: 0,
          duration: 1000
        }),
        Animated.timing(this.state.flex1, {
          toValue: 7,
          duration: 1000
        }),
        Animated.timing(this.state.opacity1, {
          toValue: 1,
          duration: 1000
        })
      ]).start(() => {
        this.setState({
          height2: 0,
          width2: 0,

          height1: height,
          width1: width,
          status: 1
        })
      });

    }
  }

  componentDidMount = () => {
    this._getNext();
  };


  render() {

    const { selectedItem } = this.state;

    const animatedStyle1 = {
      flex: this.state.flex1,
      height: this.state.height1,
      width: this.state.width1,
      opacity: this.state.opacity1
    };
    const opacityStyle1 = {
      opacity: this.state.opacity1
    };

    const animatedStyle2 = {
      flex: this.state.flex2,
      height: this.state.height2,
      width: this.state.width2,
      opacity: this.state.opacity2
    };
    const opacityStyle2 = {
      opacity: this.state.opacity2
    };
    return (
      //Buat Scroll View, buat header
      <View style={{ flex: 1, paddingTop: 30 }}>
        <Header hasTabs style={{ backgroundColor: '#2F954E' }}>
          <Body style={{ width: width - 100, flexWrap: 'nowrap', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingLeft: 10, paddingRight: 30 }}>
              <Ionicons name="ios-arrow-back" size={32} color="white" />
            </TouchableOpacity>
            <Text style={{ paddingTop: 5, fontSize: 16, color: 'white', fontWeight: 'bold' }}>Form Tambah Cuti</Text>
          </Body>
        </Header>
        <View style={{ flex: 1, backgroundColor: '#2F954E', flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 50, width: 50, borderColor: 'white', borderWidth: 1, justifyContent: 'center', alignContent: 'center' }}>
              <Text style={{ color: 'white' }}>Icon</Text>
            </View>
          </View>
          <View style={{ flex: 3, justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Cuti</Text>
          </View>
        </View>
        <View style={{ flex: 7 }}>
          <Animated.View style={[animatedStyle1]}>
            <Animated.View style={{ paddingTop: 10, paddingLeft: 25, paddingRight: 25 }}>
              <Animated.View style={{ flexDirection: 'column' }}>
                <ReinputButton
                  label='Nama'
                  value="Gilang Aditya R"
                  underlineColor="#2E7D32"
                  underlineHeight={2}
                  underlineActiveHeight={2}
                  labelActiveColor='#2E7D32'
                  labelColor='#2E7d32'
                //onPress={/* whatever callback */}
                />
                <ReinputButton
                  label='Divisi / BC'
                  value="Information Technology"
                  underlineColor="#2E7D32"
                  underlineHeight={2}
                  underlineActiveHeight={2}
                  labelActiveColor='#2E7D32'
                  labelColor='#2E7d32'
                //onPress={/* whatever callback */}
                />
                <ReinputButton
                  label="Jabatan"
                  value="Group Manager"
                  underlineColor="#2E7D32"
                  underlineHeight={2}
                  underlineActiveHeight={2}
                  labelActiveColor='#2E7D32'
                  labelColor='#2E7d32'
                //onPress={/* whatever callback */}
                />
                <ReinputButton
                  label="Sisa Cuti"
                  value="11"
                  underlineColor="#2E7D32"
                  underlineHeight={2}
                  underlineActiveHeight={2}
                  labelActiveColor='#2E7D32'
                  labelColor='#2E7d32'
                //onPress={/* whatever callback */}
                />
                <ReinputButton
                  label="Terakhir Cuti"
                  value="2019-04-18"
                  underlineColor="#2E7D32"
                  underlineHeight={2}
                  underlineActiveHeight={2}
                  labelActiveColor='#2E7D32'
                  labelColor='#2E7d32'
                //onPress={/* whatever callback */}
                />
                
              </Animated.View>
            </Animated.View>
            <Animated.View style={[opacityStyle1, { flex: 1, justifyContent: 'flex-end', marginBottom: 36, paddingLeft: 25, paddingRight: 25, }]}>
              <Button onPress={() => this._btnNext()} block style={{ backgroundColor: '#2F954E' }}>
                <Label style={{ color: 'white' }}>Next</Label>
              </Button>
            </Animated.View>
          </Animated.View>

          <Animated.View style={[animatedStyle2]}>
            
              <Animated.View style={{ paddingTop: 10, paddingLeft: 25, paddingRight: 25 }}>
                <Animated.View style={{ flexDirection: 'column' }}>
                  <PickerModal
                    onSelected={this.onSelected.bind (this)}
                    onClosed={this.onClosed.bind (this)}
                    onBackButtonPressed={this.onBackButtonPressed.bind (this)}
                    items={data}
                    sortingLanguage={'tr'}
                    showToTopButton={true}
                    selected={selectedItem}
                    autoGenerateAlphabeticalIndex={true}
                    selectPlaceholderText={'Pilih Tipe Cuti'}
                    onEndReached={() => console.log ('list ended...')}
                    searchPlaceholderText={'Pilih Tipe Cuti'}
                    requireSelection={true}
                    autoSort={true}
                  />
                  <ReinputButton
                    label='Mulai Cuti'
                    value={this.getDatetime()}
                    underlineColor="#2E7D32"
                    underlineHeight={2}
                    underlineActiveHeight={2}
                    labelActiveColor='#2E7D32'
                    labelColor='#2E7d32'
                  //onPress={/* whatever callback */}
                  />
                  <Animated.View style={{flexDirection:'row'}}>
                    <Animated.View style={{paddingTop:10}}>
                      <Animated.Text style={{ color: 'black', fontSize:17 }}>Akhir Cuti : </Animated.Text>
                    </Animated.View>
                    <Animated.View>
                      <DatePicker
                        defaultDate={new Date(2018, 4, 4)}
                        minimumDate={new Date(2018, 1, 1)}
                        maximumDate={new Date(2020, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Pilih Tanggal"
                        textStyle={{ color: "black" }}
                        placeHolderTextStyle={{ color: "black" }}
                        onDateChange={this.setDate}
                        disabled={false}
                      />
                    </Animated.View>
                  </Animated.View>
                  <ReinputButton
                    label='Total Cuti'
                    value="12"
                    underlineColor="#2E7D32"
                    underlineHeight={2}
                    underlineActiveHeight={2}
                    labelActiveColor='#2E7D32'
                    labelColor='#2E7d32'
                  //onPress={/* whatever callback */}
                  />
                  <Reinput
                    label="No Telepon"
                    underlineDuration={200}
                    activeColor="#2E7D32"
                    keyboardType="number-pad"
                    //error={this.state.errNama}
                    //onChangeText={nama => this.RuleNama (nama)}
                  />
                  <Reinput
                    label="Alamat Cuti"
                    underlineDuration={200}
                    activeColor="#2E7D32"
                    multiline = {true}
                    numberOfLines={4}
                    //error={this.state.errNama}
                    //onChangeText={nama => this.RuleNama (nama)}
                  />
                  <Reinput
                    label="Alasan Cuti"
                    underlineDuration={200}
                    activeColor="#2E7D32"
                    multiline = {true}
                    numberOfLines={4}
                    //error={this.state.errNama}
                    //onChangeText={nama => this.RuleNama (nama)}
                  />
                </Animated.View>
              </Animated.View>
            
            
            <Animated.View style={[opacityStyle2, { justifyContent: 'flex-end', marginBottom: 36, paddingLeft: 25, paddingRight: 25, flex: 1.5 }]}>
              
              <View style={{flex: 1, flexDirection: 'row', paddingTop: 20}}>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <Button
                    style={{
                      width: 120,
                      justifyContent:'center',
                      alignSelf:'center',
                      backgroundColor: '#2F954E'
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
                    onPress={() => this._btnNext()}
                    style={{
                      width: 120,
                      justifyContent:'center',
                      alignSelf:'center',
                      backgroundColor: '#2F954E'
                    }}
                  >
                    <Label style={{color: 'white'}}>Kembali</Label>
                  </Button>
                </View>
              </View>
            </Animated.View>
          </Animated.View>
        </View>
      </View>
    )
  }
}
