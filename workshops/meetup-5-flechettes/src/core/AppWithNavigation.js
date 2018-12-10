import {reduxifyNavigator} from "react-navigation-redux-helpers";
import connect from 'react-redux/es/connect/connect';
import AppNavigator from './AppNavigator';

const App = reduxifyNavigator(AppNavigator, 'root');

const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppWithNavigation = connect(mapStateToProps)(App);
export default AppWithNavigation;