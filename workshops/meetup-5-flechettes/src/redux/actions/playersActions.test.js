import mockStore from '../../core/__mocks__/mockStore';
import {
  addPlayer,
  removePlayer,
  setPlayerName, setPlayerScore,
} from './playersActions';

let store;

describe('playersActions', () => {

  beforeAll(() => {
    store = mockStore({});
  });

  test('addPlayer should create an ADD_PLAYER action with the player name', () => {
    store.dispatch(addPlayer('Jules'));
    expect(store.getActions()).toMatchSnapshot();
  });

  test('addPlayer should create an ADD_PLAYER action with the player name', () => {
    store.dispatch(removePlayer(0));
    expect(store.getActions()).toMatchSnapshot();
  });

  test('addPlayer should create an ADD_PLAYER action with the player name', () => {
    store.dispatch(setPlayerName(0, 'Jules'));
    expect(store.getActions()).toMatchSnapshot();
  });

  test('addPlayer should create an ADD_PLAYER action with the player name', () => {
    store.dispatch(setPlayerScore(1, 300));
    expect(store.getActions()).toMatchSnapshot();
  });

});