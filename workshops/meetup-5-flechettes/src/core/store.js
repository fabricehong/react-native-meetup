import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import navigationReducer from '../redux/reducers/navigationReducer';

// Combine reducers
const appReducer = combineReducers({
  nav: navigationReducer,
});

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware('root',
  state => state.nav);

const store = createStore(appReducer, applyMiddleware(middleware));

export default store;
