import {combineReducers} from 'redux';
// list of functions for the things in state.js

const user =(state=null)=> state;
const cars =(state=[])=> state;

export default combineReducers({user,cars});