export const ADD_PLAYER = 'ADD_PLAYER';

export const addPlayer = (name) => {
  return {
    type: ADD_PLAYER, payload: name,
  };
};