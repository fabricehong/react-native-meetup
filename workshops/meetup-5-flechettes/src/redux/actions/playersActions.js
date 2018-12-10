export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const SET_PLAYER_SCORE = 'SET_PLAYER_SCORE';

export function addPlayer(name) {
  return {
    type: ADD_PLAYER, name: name,
  };
}

export function removePlayer(id) {
  return {
    type: REMOVE_PLAYER, id: id,
  };
}

export function setPlayerName(name, id) {
  return {
    type: SET_PLAYER_NAME, id: id, name:name
  };
}
