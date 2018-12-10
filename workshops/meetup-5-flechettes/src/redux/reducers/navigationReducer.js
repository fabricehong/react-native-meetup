import {createNavigationReducer} from "react-navigation-redux-helpers";
import AppNavigator from '../../core/AppNavigator';

const navReducer = createNavigationReducer(AppNavigator);

export default navReducer;