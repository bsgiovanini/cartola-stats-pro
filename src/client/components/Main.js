import React, { PropTypes } from 'react';
import Header from './common/Header';
import Home from './home/Home';
import About from './about/About'
import {Route} from 'react-router-dom';


class Main extends React.Component {

  componentWillMount() {
    //this.ref = base.syncState('aboutmeText',{
    //  context: this.props,
   // //  state: 'aboutmeText'
   // });
  }

  compoenentWillUnmount() {
    //base.removeBinding(this.ref);
  }

  render() {
    
    return (    
      <div className="mainContent">
      	  <Header/>
	      <Route exact path="/" render= { 
	      	()  => <Home 
		             teamName={this.props.teamName} 
		             searchTeam={this.props.searchTeam}
		            /> 
             }
             />
	      <Route path='/about' component={About}/>  
      </div>     
    );
  }
}

export default Main;
