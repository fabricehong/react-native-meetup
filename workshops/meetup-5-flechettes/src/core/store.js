import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import navigationReducer from '../redux/reducers/navigationReducer';
import playersReducer from '../redux/reducers/playersReducer';
import {createLogger} from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

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
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, appReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(persistedReducer, 
  composeEnhancers(
    applyMiddleware(middleware)
  )
);

persistStore(store)
// const store = createStore(appReducer, applyMiddleware(middleware, logger));

export default store;
