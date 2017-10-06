
import {SEARCH_TEAM} from '../actions/index';

export function searchTeam(state = {}, action) {
  switch (action.type) {
    case SEARCH_TEAM:
    	return {
	    	teamName : action.text
	    };
    default:
      return state
  }
} 
