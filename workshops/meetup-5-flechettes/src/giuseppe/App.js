import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PlayerSelection from './PlayerSelection';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Jeu de Fléchette  Lausannois</Text>
        <PlayerSelection/>
      </View>
    )
  }
}
