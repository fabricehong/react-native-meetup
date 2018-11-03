import React from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import Map from '../components/Map';
import { StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class MapScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Icon name='ios-map' size={25} color={tintColor}/>),
    tabBarLabel: 'Map',
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Map/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  }
});

export default MapScreen;