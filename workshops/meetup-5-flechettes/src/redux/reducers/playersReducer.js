import {ADD_PLAYER, REMOVE_PLAYER} from '../actions/playersActions';

const defaultState = {
  players: [],
};

const playersReducer = (state = defaultState, action) => {

  const players = state.players;

  switch (action.type) {
    case ADD_PLAYER:
      players.push({name: action.name, score: 0});
      return {...state, players: players};
    case REMOVE_PLAYER:
      return {...state, players: players.filter((v, i) => i !== action.id)};
    default:
      return state;
  }
};

export default playersReducer;