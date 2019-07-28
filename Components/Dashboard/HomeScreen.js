import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Card, CardItem, Content, Button } from 'native-base';
import ElevatedView from 'react-native-elevated-view';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from 'react-native-vector-icons';
import {Icon} from 'react-native-elements';
import { PieChart } from 'react-native-chart-kit';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { height, width } = Dimensions.get('window');
    const { navigate } = this.props.navigation;

    const data = [
      {
        name: 'Seoul',
        population: 21500000,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Toronto',
        population: 2800000,
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Beijing',
        population: 527612,
        color: 'red',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'New York',
        population: 8538000,
        color: 'green',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Moscow',
        population: 11920000,
        color: 'rgb(0, 0, 255)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
    ];

    const chartConfig = {
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
        paddingLeft: 10,
      },
    };

    return (
      <View style={styles.container}>
        <View style={{ height: 150, width: '100%' }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#2F954E',
              flexDirection: 'row',
              padding: 25,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  
                  height: 100,
                  width: 80,
                }}
              >
                <Image
                  style={{ height:100, width:80  }}
                  source={require('../../assets/foto.jpg')}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={{ flex: 2.5, justifyContent: 'space-around' }}>
              <View style={{ flexDirection: 'column', justifyContent:'center',alignContent:'center', alignItems:'center' }}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                  Gilang Aditya R
                </Text>
                <Text style={{ color: 'white', fontSize: 16 }}>
                  Karyawan
                </Text>
              </View>
              <View
                style={{
                  paddingTop: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
              >
                <Button
                  onPress={() => this.props.navigation.navigate('CheckIn')}
                  primary
                  style={{
                    width: 90,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderRadius:10
                  }}
                >
                  <Text style={{ color: 'black' }}> Checkin </Text>
                </Button>
                <Button
                  primary
                  style={{
                    width: 90,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderRadius:10
                  }}
                >
                  <Text style={{ color: 'black' }}> Checkout </Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
        <ScrollView style={{ flex: 1, padding: 10, marginBottom: 10 }}>
          <View style={{ paddingTop: 5 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('CutiScreen')}>
              <Card
                style={{
                  height: 100,
                  width: width / 2 - 50,
                  marginRight: 15,
                  marginTop: 10,
                  borderRadius: 10,
                  backgroundColor:'#2F954E'
                }}
              >
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Icon
                      name='account-clock-outline'
                      type='material-community'
                      color='white'
                      size={50}
                      iconStyle={{}}
                       />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color:'white' }}>
                      Cuti
                    </Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
              
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('GantiScreen')}>
              <Card
                style={{
                  height: 100,
                  width: width / 2 - 50,
                  marginRight: 15,
                  marginTop: 10,
                  borderRadius: 10,
                  backgroundColor:'#2F954E'
                }}
              >
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Icon
                      name='credit-card'
                      type='octicon'
                      color='white'
                      size={50}
                      iconStyle={{}}
                       />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color:'white' }}>
                      Penggantian
                    </Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
              
            <TouchableOpacity>
              <Card
                style={{
                  height: 100,
                  width: width / 2 - 50,
                  marginRight: 15,
                  marginTop: 10,
                  borderRadius: 10,
                  backgroundColor:'#2F954E'
                }}
              >
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Icon
                      name='ios-briefcase'
                      type='ionicon'
                      color='white'
                      size={50}
                      iconStyle={{}}
                       />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color:'white' }}>
                      Izin
                    </Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
              
            <TouchableOpacity>
              <Card
                style={{
                  height: 100,
                  width: width / 2 - 50,
                  marginRight: 15,
                  marginTop: 10,
                  borderRadius: 10,
                  backgroundColor:'#2F954E'
                }}
              >
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Icon
                      name='ios-more'
                      type='ionicon'
                      color='white'
                      size={50}
                      iconStyle={{}}
                       />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color:'white' }}>
                      More
                    </Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
              
              
            </View>
          </View>
          <Card
            style={{
              borderRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <View style={{ padding: 10, paddingLeft: 10, backgroundColor:'#2F954E', borderTopLeftRadius:10, borderTopRightRadius:10 }}>
              <Text style={{ fontSize: 18, color: 'white' }}>
                Graphic Chart
              </Text>
            </View>
            <View style={{ height: 200, paddingTop: 5 }}>
              <PieChart
                data={data}
                width={width - 35}
                height={200}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="10"
              />
            </View>
          </Card>
          <Card
            style={{
              borderRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <View style={{ padding: 10, paddingLeft: 10, backgroundColor:'#2F954E', borderTopLeftRadius:10, borderTopRightRadius:10 }}>
              <Text style={{ fontSize: 18, color: 'white' }}>
                Graphic Chart
              </Text>
            </View>
            <View style={{ height: 200, paddingTop: 5 }}>
              <PieChart
                data={data}
                width={width - 35}
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
    backgroundColor: '#f9f9f9',
  },
});
