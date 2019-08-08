import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
} from 'react-native';

export default class CheckAll extends Component {
  constructor () {
    super ();
    this._bootstrapAsync ();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem ('Link');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // jika async link tidak ada maka ke auth, kalo ada ke update
    this.props.navigation.navigate (userToken ? 'Update' : 'Getting');
  };

  // Render any loading content that you like here
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
