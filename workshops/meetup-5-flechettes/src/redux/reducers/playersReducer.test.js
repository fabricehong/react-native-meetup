import * as actions from '../actions/playersActions';

const defaultState = {
  players: [],
};

const playersReducer = (state = defaultState, action) => {

  switch (action.type) {
    case actions.ADD_PLAYER:
      const players = state.players;
      players.push(action.name);
      return {...state, players: players};
    default:
      return state;
  }
};

export default playersReducer;