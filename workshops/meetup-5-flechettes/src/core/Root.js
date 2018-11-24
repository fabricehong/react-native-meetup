import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import AppWithNavigation from './AppWithNavigation';

/**
 * Add contexts to the app, like navigation and a Redux store.
 */
class Root extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigation/>
      </Provider>
    );
  }
}

export default Root;