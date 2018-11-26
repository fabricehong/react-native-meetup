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

});