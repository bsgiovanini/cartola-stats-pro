import React from 'react';
import TeamListContainer from './TeamListContainer';
import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap';

class Home extends React.Component {

	constructor() {
    	super();
    	this.onTeamChanged = this.onTeamChanged.bind(this);
  	}

  	onTeamChanged() {
  		this.props.searchTeam(this.searchInput.value);
  	}

	render() {

		return (
			<div className="container">
				<InputGroup>
			        <Input getRef={(text) => this.searchInput = text}
			        	placeholder="Choose your team" 
			        	onChange={this.onTeamChanged} 
			        />
			        <InputGroupButton>
			           <Button color="primary" onClick={this.onTeamChanged}>Search</Button>
			        </InputGroupButton>
			    </InputGroup>
				<TeamListContainer teamName={this.props.teamName} ></TeamListContainer>
			</div>
  		)

	}
  
}

export default Home;





