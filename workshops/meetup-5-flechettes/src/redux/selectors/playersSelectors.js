
export const getPlayers = (state) => (state.players.players);
export const getPlayersOrderedByScore = (state) => {
    return state.players.players.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0)); 
};