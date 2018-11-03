import Map from './components/Map';
import {createBottomTabNavigator} from 'react-navigation';
import CreateScreen from './containers/CreateScreen';

export default createBottomTabNavigator({
  Map: Map,
  Create: CreateScreen,
});
