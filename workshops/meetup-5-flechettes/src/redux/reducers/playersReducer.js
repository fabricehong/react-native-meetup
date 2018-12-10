import {
  ADD_PLAYER,
  REMOVE_PLAYER, SET_PLAYER_NAME,
} from '../actions/playersActions';

const defaultState = {
  players: [],
};

const playersReducer = (state = defaultState, action) => {

  const players = state.players.slice(0); // copy the array

  switch (action.type) {
    case ADD_PLAYER:
      players.push({name: action.name, score: 0});
      return {...state, players: players};
    case REMOVE_PLAYER:
      return {...state, players: players.filter((v, i) => i !== action.id)};
    case SET_PLAYER_NAME:
      players[action.id].name = action.name;
      return {...state, players: players};
    default:
      return state;
  }
};

export default playersReducer;