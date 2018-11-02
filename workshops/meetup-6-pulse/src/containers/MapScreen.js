import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import Map from '../components/Map';

class MapScreen extends Component {
    render() {
      return (
        <View style={styles.mainView}>
          <Header headerText="Pulse friends"/>
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

export default MapScreen;