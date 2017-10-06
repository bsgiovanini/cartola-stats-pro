import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { routerReducer as routing } from 'react-router-redux';
import {ApolloClient, ApolloProvider, createNetworkInterface} from 'react-apollo';
import { syncHistoryWithStore } from 'react-router-redux';

import {searchTeam} from './reducers/index';
import AppContainer from './components/AppContainer';
import Home from './components/home/Home';
import About from './components/about/About';

import './components/bundle.scss';

const defaultState = {

	searchTeamReducer:{
		teamName: "vasco"
	}
};

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
});
const client = new ApolloClient({
	networkInterface
});

const store = createStore(
  combineReducers({
    searchTeamReducer: searchTeam,
    apollo: client.reducer(),
    routing
  }),
  defaultState, // initial state
  compose(
      applyMiddleware(client.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
       <AppContainer/>
    </Router>
  </ApolloProvider>
  , document.getElementById('react-root'));
