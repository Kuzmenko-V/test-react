import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './user-actions';

const postsReducer = createReducer([], {
    [actions.setUserPosts]: (_, {payload}) => payload,
});

const albumsReducer = createReducer([], {
    [actions.setUserAlbums]: (_, {payload}) => payload,
});
const infoReducer = createReducer([], {
    [actions.setUserInfo]: (_, {payload}) => payload,
});

export default combineReducers({
    info: infoReducer,
    albums: albumsReducer,
    posts: postsReducer,
});