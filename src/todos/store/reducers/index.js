import {combineReducers} from 'redux';
import todos from './todos';
import filter from './filter';
import * as filters from "../../constants/filters";
export default combineReducers({
    todos,
    filter
})
/**
 * {
 * todos:{
     todos:[]
   },
 * filter:{
 *   filter:filters.ALL
 * }:
 **/