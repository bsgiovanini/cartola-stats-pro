import React from 'react';
import TeamListContainer from './TeamListContainer';

class Home extends React.Component {

	constructor() {
    	super();
    	this.onTeamChanged = this.onTeamChanged.bind(this);
  	}

  	onTeamChanged(event) {
  		this.props.searchTeam(event.target.value);
  	}

	render() {

		return (
			<div className="container">
				<div className="field has-addons">
					<p className="control is-expanded">
				    	<input className="input is-fullwidth" type="text" placeholder="Choose your team" onChange={this.onTeamChanged}></input>
				  	</p>
					<p className="control">
					    <a className="button is-info">
					      Search
					    </a>
					</p>
				</div>
				<TeamListContainer teamName={this.props.teamName} ></TeamListContainer>
			</div>
  		)

	}
  
}

export default Home;





