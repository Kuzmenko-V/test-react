import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './users-info-actions';
 
const listReducer = createReducer([], {
    [actions.setUsersList]: (_, {payload}) => payload,
});

export default combineReducers({
    list: listReducer,
});