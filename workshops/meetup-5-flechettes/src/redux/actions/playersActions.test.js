import {
  addPlayer,
  removePlayer,
  setPlayerName,
} from './playersActions';

describe('playersActions', () => {

  test('addPlayer should create an ADD_PLAYER action with the player name', () => {
    expect(addPlayer('Jules')).toMatchSnapshot();
  });

  test('addPlayer should create an ADD_PLAYER action with the player name', () => {
    expect(removePlayer(0)).toMatchSnapshot();
  });

  test('addPlayer should create an ADD_PLAYER action with the player name', () => {
    expect(setPlayerName(0, 'Jules')).toMatchSnapshot();
  });

});