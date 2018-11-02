import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, TouchableHighlight } from 'react-native';
import Game from './Game';

export default class App extends Component {
  onPressButton = () => {
    Alert.alert("yes");
  }

  onStart = () => {
    Alert.alert("yes");
  }
  render() {
    return (
      <Game/>
    )
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  
});