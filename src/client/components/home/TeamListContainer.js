import {gql, graphql} from 'react-apollo';
import TeamList from './TeamList'
import {withRouter} from 'react-router-dom';

let teamsListQuery = gql`
	query SearchByTeam($teamName: String){
	  teams(name: $teamName) {
	  	id
	    name
	    owner
	  }
	}
 `;

const mapPropsToOptions = ({ teamName }) => {
  
  return {
    variables: {
      teamName
    }
  };
};

const TeamsListWithData = graphql(teamsListQuery, {
 	options: mapPropsToOptions
 })(TeamList);


export default withRouter(TeamsListWithData);