import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPlayers} from '../../redux/selectors/playersSelectors';
import {addPlayer} from '../../redux/actions/playersActions';
import PlayerSelectionPageView from './PlayerSelectionPageView';

function mapStateToProps(state) {
  return {
    players: getPlayers(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPlayer
  }, dispatch);
}

const PlayerSelectionPage = connect(mapStateToProps, mapDispatchToProps)(PlayerSelectionPageView);
export default PlayerSelectionPage;