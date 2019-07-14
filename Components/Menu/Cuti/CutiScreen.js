import React, { Component } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Constants} from 'expo';
import { Form, Item, Input, Label, Button, Container, Header, Tab, Tabs, TabHeading, Icon, Text, Body, Left, Right, Textarea, List, ListItem, DatePicker, SwipeRow, Card, CardItem } from 'native-base';
import { Ionicons } from 'react-native-vector-icons';
import { SearchBar } from 'react-native-elements';

//import data from './db.json';

//0 -> Belum di acak
//1 -> Accept
//2 -> Reject

export default class CutiScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      animation: new Animated.Value(0),
      isHeader: false,
      iconInfo: 'ios-search',
      textOpacity: new Animated.Value(0),
      height: new Animated.Value(0),

      success: '#5cb85c',
      error: '#d9534f',
      warna: '#f9f9f9',

      data: [],
      change: false,

      status: null
    };
    this.setDate = this.setDate.bind(this);
  }

  onAccept = (id) => {
    status = '1'
    this.setState({ change: true })
    this.updateStatus(id, status);
  }

  onReject = (id) => {
    status = '2'
    this.setState({ change: true })
    this.updateStatus(id, status);
  }


  getCuti = () => {
    //Dengan tanggal
    //console.log('Halo halo')
    fetch('http://192.168.0.7:8080/hris_test/getCuti.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

      })
    }).then((response) => response.json())
      .then((responseJson => {
        this.setState({
          data: responseJson
        })
      }))
  }

  updateStatus = (id, status) => {
    console.log('Data mau di update');
    var id = id;
    var status = status;
    fetch('http://192.168.0.7:8080/hris_test/changeStatus.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        status: status
      })
    }).then((response) => response.json())
      .then((responseJson => {
        if (responseJson == 'Data Update') {
          alert('Sukses')
        }
      }))
  }

  componentDidMount = () => {
    this.getCuti();
  };

  componentDidUpdate = (prevState) => {
    if (this.state.change === true) {
      this.setState({ change: false })
      this.getCuti();
    }
  };

  componentWillMount() {
    this.getCuti();
  }

  openHeader = () => {
    if (this.state.isHeader === false) {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1000
      }).start(() => {
        this.setState({
          iconInfo: 'ios-close',
          isHeader: true,
          textOpacity:1
        });
      });
      
    } else if (this.state.isHeader === true) {
      //console.log('Tutup');
       Animated.timing(this.state.animation, {
         toValue: 0,
         duration: 1000
       }).start(() => {
         this.setState({
           iconInfo: 'ios-search',
           isHeader: false,
           textOpacity: 0
         });
       });
      
    } else {
      alert('Error');
    }
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  setColor(status) {
    var warna = '';
    if (status == '0') {
      warna = '#f9f9f9'
    } else if (status == '1') {
      warna = '#5cb85c'
    } else if (status == '2') {
      warna = '#d9534f'
    }
    return warna;
  }

  setText(status) {
    var warna = '';
    if (status == '0') {
      warna = 'black'
    } else {
      warna = 'white'
    }
    return warna;
  }

  setClose(status) {
    var warna = '';
    if (status == '0') {
      benar = false
    } else {
      benar = true
    }
    return benar;
  }

  setBackLeft(status) {
    var warna = '';
    if (status == '0') {
      benar = 75
    } else {
      benar = 0
    }
    return benar;
  }



  render() {
    const { width, height } = Dimensions.get('window');

    const animatedStyle = {
      flex: this.state.animation,
      // opacity: this.state.textOpacity,
      // height: this.state.height
    }
    //Searchbar di buat animasi
    return (
      <View style={{ paddingTop: Constants.statusBarHeight, flex: 1 }}>
        <View style={{ height: 60, width: width, flexDirection: 'row', backgroundColor: '#eeba19' }}>
          <View style={{ flex: 0.4, justifyContent: 'center', alignContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 15 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')} style={{ paddingLeft: 0 }}>
              <Ionicons name="ios-arrow-back" size={32} color="#4f331b" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1.5, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#4f331b' }}>Report Cuti</Text>
          </View>
          <View style={{ flex: 0.6, justifyContent: 'space-around', alignContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CutiForm')} style={{ paddingLeft: 0 }}>
              <Ionicons name="ios-add" size={32} color="#4f331b" />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openHeader} style={{ paddingLeft: 0 }}>
              <Ionicons name={this.state.iconInfo} size={32} color="#4f331b" />
            </TouchableOpacity>
          </View>
        </View>
        <Animated.View style={[animatedStyle, { backgroundColor: '#eeba19' }]}>
          <Animated.View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10 }}>
            <Animated.View style={{ paddingTop: 10 }}>
              <Animated.Text style={{ color: '#4f331b' }}>Mulai</Animated.Text>
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
                placeHolderText="Select date"
                textStyle={{ color:'#4f331b'} }
                placeHolderTextStyle={{ color: "#4f331b" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Animated.View>
          </Animated.View>
          <Animated.View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10 }}>
            <Animated.View style={{ paddingTop: 10 }}>
              <Text style={{ color: '#4f331b' }}>Akhir</Text>
            </Animated.View>
            <Animated.View >
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2020, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "#4f331b" }}
                placeHolderTextStyle={{ color: "#4f331b" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Animated.View>
          </Animated.View>
        </Animated.View>
        <View style={{ flex: 4.5 }}>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {
              this.state.data.map((items, i) => {
                return (
                  <Card style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }} key={items.id}>
                    <SwipeRow
                      leftOpenValue={75}
                      rightOpenValue={-75}

                      disableLeftSwipe={this.setClose(items.status)}
                      disableRightSwipe={this.setClose(items.status)}
                      style={{ backgroundColor: this.setColor(items.status) }}
                      left={
                        <Button success onPress={() => this.onAccept(items.id)}>
                          <Icon active name="add" />
                        </Button>
                      }
                      body={
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                          <View style={{ flex: 3.3, flexWrap: 'wrap' }}>
                            <Text style={{ color: this.setText(items.status) }}>{items.nama}</Text>
                            <Text style={{ color: this.setText(items.status) }}>{items.tanggal}</Text>
                          </View>
                          <View style={{ flex: 3 }}>
                            <Text style={{ color: this.setText(items.status) }}>Tipe</Text>
                            <Text style={{ color: this.setText(items.status) }}>{items.tipe_cuti}</Text>
                          </View>
                          <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('CutiDetail')}>
                              <Ionicons name="ios-arrow-forward" size={32} color={this.setText(items.status)} />
                            </TouchableOpacity>
                          </View>
                        </View>
                      }
                      right={
                        <Button danger onPress={() => this.onReject(items.id)}>
                          <Icon active name="trash" />
                        </Button>
                      }
                    />
                  </Card>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
    );
  }

}