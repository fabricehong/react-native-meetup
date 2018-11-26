import * as actions from '../actions/playersActions';
import playersReducer from './playersReducer';

const defaultState = {
  players: []
};

describe('playersReducer', () => {

  test('Add player action should add a player to the store', () => {
    const newState = playersReducer(defaultState, actions.addPlayer('Jules'));
    expect(newState).toMatchSnapshot();
  });

  test('removePlayer, remove a player when there is 2 players should work', () => {
    //Given
    const state = {
      players: [
        {name: 'Lukas', score: 1},
        {name: 'Jules', score: 2}
      ],
    };

    // When
    const newState = playersReducer(state, actions.removePlayer(1));

    // Then
    expect(newState).toMatchSnapshot();
  });

  test('removePlayer, remove a player when there is no players should do nothing', () => {
    //Given
    const state = {
      players: [],
    };

    // When
    const newState = playersReducer(state, actions.removePlayer(0));

    // Then
    expect(newState).toMatchSnapshot();
  });

});