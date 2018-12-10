import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import navigationReducer from '../redux/reducers/navigationReducer';
import playersReducer from '../redux/reducers/playersReducer';
import {createLogger} from 'redux-logger';

// Combine reducers
const appReducer = combineReducers({
  nav: navigationReducer, players: playersReducer,
});

const env = process.env['ENV'];

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware('root',
  state => state.nav);

/*
let logger;
if (env === 'dev') {
  logger = createLogger({
    collapsed: true,
  });
}
*/

const store = createStore(appReducer, applyMiddleware(middleware));
// const store = createStore(appReducer, applyMiddleware(middleware, logger));

export default store;
