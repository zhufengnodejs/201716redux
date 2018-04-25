import * as types from '../action-types';
import * as filters from '../../constants/filters';
const initState = {filter:filters.ALL};
export default function(state=initState,action){
  switch(action.type){
      case types.CHANGE_FILTER:
          return {filter:action.filter};
      default:
          return state;
  }
}
/**
 * {
 *  filter:'ALL'
 * }
 **/
