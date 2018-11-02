import React from 'react';
import { View, Text } from 'react-native';
import Map from './components/Map';
import {createBottomTabNavigator} from 'react-navigation';

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
  Map: Map,
  Create: CreateScreen,
});
