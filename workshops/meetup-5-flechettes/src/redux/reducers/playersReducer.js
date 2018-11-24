import * as actions from '../actions/playersActions';
import {getPlayers} from '../selectors/playersSelectors';

const defaultState = {
  allPlayers: [],
};

const playersReducer = (state = defaultState, action) => {

  switch (action.type) {

    case actions.ADD_PLAYER:
      const players = getPlayers();
      players.append(action.payload);
      return {...state, players: players};

    default:
      return state;
  }
};

export default playersReducer;