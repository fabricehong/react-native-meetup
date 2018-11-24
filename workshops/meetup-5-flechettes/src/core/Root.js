import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import App from '../components/App';

/**
 * Add contexts to the app, like navigation and a Redux store.
 */
class Root extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

export default Root;

