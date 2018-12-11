import PlayerSelectionPage
  from '../components/PlayerSelectionPage/PlayerSelectionPage';
import GamePageView from '../components/GamePage/GamePageView';
import PlayerScorePageView
  from '../components/PlayerScorePage/PlayerScorePageView';
import GameScorePage from '../components/GameScorePage/GameScorePage';

const routes = {
  playerSelection: {
    screen: PlayerSelectionPage,
    navigationOptions: () => ({
      headerTitle: 'Sélection des joueurs',
    })
  }, gamePage: {
    screen: GamePageView,
    navigationOptions: () => ({
      headerTitle: 'Jouez !',
    })
  }, playerScore: {
    screen: PlayerScorePageView,
    navigationOptions: () => ({
      headerTitle: 'Score',
    })
  }, gameScore: {
    screen: GameScorePage,
    navigationOptions: () => ({
      headerTitle: 'Classement',
    })
  },
};

export default routes;