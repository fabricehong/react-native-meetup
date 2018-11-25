export const ADD_PLAYER = 'ADD_PLAYER';

export function addPlayer(name) {
  return {
    type: ADD_PLAYER, name: name,
  };
}