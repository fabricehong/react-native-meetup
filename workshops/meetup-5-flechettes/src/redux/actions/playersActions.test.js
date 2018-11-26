import mockStore from '../../core/__mocks__/mockStore';
import {addPlayer} from './playersActions';

let store;

describe('playersActions', () => {

  beforeAll(() => {
    store = mockStore({});
  });

  test('addPlayer should create an ADD_PLAYER action with the player name', () => {
    store.dispatch(addPlayer('Jules'));
    expect(store.getActions()).toMatchSnapshot();
  });

});