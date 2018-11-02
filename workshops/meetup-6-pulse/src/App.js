import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header'
import Map from './components/Map';

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Header headerText="Pulse friends"/>
        <Map />
      </View>
    )
  }
}

class MapScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class CreateScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Map: MapScreen,
  Create: CreateScreen,
});


export default App;
