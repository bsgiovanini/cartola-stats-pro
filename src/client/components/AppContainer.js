import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import {gql, graphql} from 'react-apollo';
import Main from './Main'

function mapStateToProps(state) {
  return {
    teamName : state.searchTeamReducer.teamName
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators ,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);