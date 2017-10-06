import React from 'react';

class TeamList extends React.Component {

  render() {

    const data = this.props.data;
   
    if (data.loading) {
      return (<p>Loading ...</p>);
    }
    if (data.error) {
     return (<p>{data.error.message}</p>);
    }
    return (<ul>
     { data.teams.map( ch => <li key={ch.id}>{ch.name} {ch.owner}</li> ) }
    </ul>);
  } 
}


export default TeamList;