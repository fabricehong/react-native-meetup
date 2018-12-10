import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

export default mockStore;