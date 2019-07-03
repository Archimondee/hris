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
  ScrollView
} from 'react-native';
import { Form, Item, Input, Label, Button, Container, Header, Tab, Tabs, TabHeading, Icon, Text, Body, Left, Right, Textarea, List, ListItem, DatePicker, SwipeRow, Card, CardItem } from 'native-base';
import { Ionicons } from 'react-native-vector-icons';
import { SearchBar } from 'react-native-elements';

export default class ReportScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      animation: new Animated.Value(0),
      openOpacity: new Animated.Value(0),
      isHeader: false,
      iconInfo: 'ios-search',

      success: '#5cb85c',
      error: '#d9534f',
      warna: '#f9f9f9',

      data: [],
      change: false,

      status: null
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  openHeader = () => {
    if (this.state.isHeader === false) {
      this.setVisible();
      Animated.timing(this.state.animation, {
        toValue: 100,
        duration: 1000
      }).start(() => {
        this.setState({
          iconInfo: 'ios-close',
          isHeader: true,
        })
      });
    } else if (this.state.isHeader === true) {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1000
      }).start(() => {
        this.setVisible();
        this.setState({
          iconInfo: 'ios-search',
          isHeader: false
        });
      });
    } else {
      alert('Error');
    }
  }

  setVisible = () => {
    if (this.state.isHeader === false) {
      Animated.timing(this.state.openOpacity, {
        toValue: 1,
        duration: 1
      }).start();
    } else {
      Animated.timing(this.state.openOpacity, {
        toValue: 0,
        duration: 1
      }).start();
    }
  }

  render() {
    const { height, width } = Dimensions.get('window');
    const { navigate } = this.props.navigation;

    const animatedStyle = {
      height: this.state.animation,
      opacity: this.state.openOpacity
    }

    return (
      <View style={styles.container}>
        <View style={{ height: 60, width: width, backgroundColor: '#6a51ae', justifyContent: 'flex-end', alignItems: 'center', alignContent: 'flex-end', flexDirection: 'row' }}>
          <Text style={{ color: 'white' }}>Search.....   </Text>
          <TouchableOpacity onPress={this.openHeader} style={{ paddingRight: 10 }}>
            <Ionicons name={this.state.iconInfo} size={32} color="white" />
          </TouchableOpacity>
        </View>
        <Animated.View style={[animatedStyle, { backgroundColor: '#6a51ae' }]}>
          <Animated.View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10 }}>
            <Animated.View style={{ paddingTop: 10 }}>
              <Animated.Text style={{ color: 'white' }}>Mulai</Animated.Text>
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
                textStyle={{ color: "#ffffff" }}
                placeHolderTextStyle={{ color: "#ffffff" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Animated.View>
          </Animated.View>
          <Animated.View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10 }}>
            <Animated.View style={{ paddingTop: 10 }}>
              <Text style={{ color: 'white' }}>Akhir</Text>
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
                placeHolderText="Select datee"
                textStyle={{ color: "#ffffff" }}
                placeHolderTextStyle={{ color: "#ffffff" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Animated.View>
          </Animated.View>
        </Animated.View>
        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <Card style={{ marginTop: 10, marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
              <SwipeRow
                leftOpenValue={75}
                rightOpenValue={-75}
                disableLeftSwipe={true}
                disableRightSwipe={true}
                style={{ backgroundColor: 'white', borderRadius: 10 }}
                body={
                  <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 3.3, flexWrap: 'wrap' }}>
                      <Text style={{ color: 'black' }}>Gilang Aditya R</Text>
                      <Text style={{ color: 'black' }}>29 April 1991</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                      <Text style={{ color: 'black' }}>Tipe</Text>
                      <Text style={{ color: 'black' }}>Cuti Reguler</Text>
                    </View>
                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                      <TouchableOpacity onPress={() => alert('Open bar')}>
                        <Ionicons name="ios-arrow-forward" size={32} color='black' />
                      </TouchableOpacity>
                    </View>
                  </View>
                }
              />
            </Card>
            <Card style={{ marginTop: 10, marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
              <SwipeRow
                leftOpenValue={75}
                rightOpenValue={-75}
                disableLeftSwipe={true}
                disableRightSwipe={true}
                style={{ backgroundColor: 'white', borderRadius: 10 }}
                body={
                  <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 3.3, flexWrap: 'wrap' }}>
                      <Text style={{ color: 'black' }}>Gilang Aditya R</Text>
                      <Text style={{ color: 'black' }}>29 April 1991</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                      <Text style={{ color: 'black' }}>Tipe</Text>
                      <Text style={{ color: 'black' }}>Cuti Reguler</Text>
                    </View>
                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                      <TouchableOpacity onPress={() => alert('Open bar')}>
                        <Ionicons name="ios-arrow-forward" size={32} color='black' />
                      </TouchableOpacity>
                    </View>
                  </View>
                }
              />
            </Card>
            <Card style={{ marginTop: 10, marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
              <SwipeRow
                leftOpenValue={75}
                rightOpenValue={-75}
                disableLeftSwipe={true}
                disableRightSwipe={true}
                style={{ backgroundColor: 'white', borderRadius: 10 }}
                body={
                  <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 3.3, flexWrap: 'wrap' }}>
                      <Text style={{ color: 'black' }}>Gilang Aditya R</Text>
                      <Text style={{ color: 'black' }}>29 April 1991</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                      <Text style={{ color: 'black' }}>Tipe</Text>
                      <Text style={{ color: 'black' }}>Cuti Reguler</Text>
                    </View>
                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                      <TouchableOpacity onPress={() => alert('Open bar')}>
                        <Ionicons name="ios-arrow-forward" size={32} color='black' />
                      </TouchableOpacity>
                    </View>
                  </View>
                }
              />
            </Card>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3'
  }
});