import {createBottomTabNavigator} from 'react-navigation';
import MapScreen from './containers/MapScreen';
import CreateScreen from './containers/CreateScreen';

export default createBottomTabNavigator({
  Map: MapScreen,
  Create: CreateScreen
}, {
  navigationOptions: ({navigation}) => ({
    tabBarOptions: {
      showIcon: true,
      showLabel: true
    },
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  })
});
