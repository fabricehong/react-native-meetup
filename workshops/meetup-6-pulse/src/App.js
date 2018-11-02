import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header'
import Map from './components/Map';

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Header headerText="Meetup 3 maps"/>
        <Map />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  }
});

export default App;
