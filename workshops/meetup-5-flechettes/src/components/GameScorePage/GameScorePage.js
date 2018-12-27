import {connect} from 'react-redux';
import {getPlayersOrderedByScore} from '../../redux/selectors/playersSelectors';
import GameScorePageView from './GameScorePageView';

function mapStateToProps(state) {
  return {
    players: getPlayersOrderedByScore(state)
  };
}

const GameScorePage = connect(mapStateToProps)(GameScorePageView);
export default GameScorePage;