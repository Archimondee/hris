import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {Card, CardItem, Content, Button} from 'native-base';
import ElevatedView from 'react-native-elevated-view';
import {Ionicons, MaterialCommunityIcons, FontAwesome5} from 'react-native-vector-icons';
import {
  PieChart,
} from 'react-native-chart-kit'
import { requireNativeViewManager } from '@unimodules/core';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {height, width}= Dimensions.get('window');
    const { navigate } = this.props.navigation;

    const data = [
      { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'New York', population: 8538000, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
    ]

    const chartConfig = {
      backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                  paddingLeft:10,
      }
    }
  
    return (
      <View style={styles.container}>
        <View style={{height:150, width:'100%'}}>
          <View style={{ flex: 1, backgroundColor: '#eeba19', flexDirection: 'row', padding: 25, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <View style={{ flex: 1 }}>
              <View style={{ borderColor: 'black', backgroundColor: 'white', height: 100, width: 80 }}>
                <Image
                  style={{height:100, width:80}}
                  source= {require('../../assets/foto.jpg')}
                  resizeMode='stretch'
                />
              </View>
            </View>
            <View style={{ flex: 2.5, justifyContent:'space-around' }}>
              <View style={{flexDirection:'column'}}>
                <Text style={{ color: '#4f331b', fontSize: 18 }}>
                  Gilang Aditya R
                </Text>
                <Text style={{ color: '#4f331b', fontSize: 16 }}>
                  Karyawan
                </Text>
              </View>
              <View style={{ paddingTop:5, flexDirection: 'row', justifyContent: 'space-around'}}>
                <Button onPress={()=>this.props.navigation.navigate('CheckIn')} primary style={{width:90, alignContent:'center', alignItems:'center', justifyContent:'center', backgroundColor:'#4f331b'}}><Text style={{color:'white'}}> Checkin </Text></Button>
                <Button primary style={{width:90, alignContent:'center', alignItems:'center', justifyContent:'center', backgroundColor:'#4f331b'}}><Text style={{color:'white'}}> Checkout </Text></Button>
              </View>
            </View>
          </View>
        </View>
        <ScrollView style={{flex:1, padding:10, marginBottom:30}}>
          <Card style={{ borderRadius: 10, borderBottomLeftRadius:10, borderBottomRightRadius:10 }}>
            <View style={{ padding: 10, paddingLeft: 10, borderBottomWidth:1, borderColor:'#4f331b' }}>
              <Text style={{ fontSize: 18, color: '#4f331b' }}>Menu</Text>
            </View>
            <CardItem cardBody style={{ borderRadius: 10, borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
              <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'space-around', paddingLeft: 10, paddingRight: 10, paddingBottom: 20, }}>
                <TouchableOpacity onPress={() => navigate('CutiScreen', { name: 'Brent' })} style={{ height: 130, width: (width - 85) / 4, borderWidth: 0, borderColor: 'black', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                  <MaterialCommunityIcons name="account-clock-outline" size={45} color="#4f331b" />
                  <Text style={{ fontSize: 14, textAlign: 'center' }}>Cuti</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("ReportIzin")} style={{ height: 140, width: (width - 85) / 4, borderWidth: 0, borderColor: 'black', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                  <MaterialCommunityIcons name="account-off-outline" size={45} color="#4f331b" />
                  <Text style={{ fontSize: 14, textAlign: 'center' }}>Izin Lainnya</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("ReportPenggantian")} style={{ height: 130, width: (width - 85) / 4, borderWidth: 0, borderColor: 'black', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                  <FontAwesome5 name="file-invoice-dollar" size={45} color="#4f331b" />
                  <Text style={{ fontSize: 14, textAlign:'center' }}>Ganti Baru</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 130, width: (width - 85) / 4, borderWidth: 0, borderColor: 'black', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                  <Ionicons name="ios-more" size={45} color="#4f331b" />
                  <Text style={{ fontSize: 14 }}>More</Text>
                </TouchableOpacity>
              </View>
            </CardItem>
          </Card>
          <Card style={{ borderRadius: 10, borderBottomLeftRadius:10, borderBottomRightRadius:10, }}>
            <View style={{ padding: 10, paddingLeft: 10 }}>
              <Text style={{ fontSize: 18, color: '#4f331b' }}>Graphic Chart</Text>
            </View>
            <View style={{ height: 200, paddingTop: 5 }}>
              <PieChart
                data={data}
                width={width-35}
                height={200}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="10"
              />
            </View>
          </Card>
          <Card style={{ borderRadius: 10, borderBottomLeftRadius:10, borderBottomRightRadius:10, }}>
            <View style={{ padding: 10, paddingLeft: 10 }}>
              <Text style={{ fontSize: 18, color: '#4f331b' }}>Graphic Chart</Text>
            </View>
            <View style={{ height: 200, paddingTop: 5 }}>
              <PieChart
                data={data}
                width={width-35}
                height={200}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="10"
              />
            </View>
          </Card>
        </ScrollView>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
});