import React from 'react';
import { Table } from 'reactstrap';

class TeamList extends React.Component {

  render() {

    const data = this.props.data;
   
    if (data.loading) {
      return (<p>Loading ...</p>);
    }
    if (data.error) {
     return (<p>{data.error.message}</p>);
    }
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Team Name</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          { data.teams.map( team =>
            <tr key={team.id}>
              <th scope="row">{team.id}</th>
              <td>{team.name}</td>
              <td>{team.owner}</td>
            </tr>
         )} 
        </tbody>
      </Table>
    );
  } 
}


export default TeamList;