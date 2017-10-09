import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import {gql, graphql} from 'react-apollo';
import {withRouter} from 'react-router-dom';
import Main from './Main'
import 'bootstrap/dist/css/bootstrap.css';

function mapStateToProps(state) {
  return {
    teamName : state.searchTeamReducer.teamName
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators ,dispatch);
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));