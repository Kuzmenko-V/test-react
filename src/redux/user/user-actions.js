import { createAction } from '@reduxjs/toolkit';

const setUserAlbums = createAction('setUserALbums');
const setUserPosts = createAction('setUserPosts');
const setUserInfo = createAction('setUserInfo');
export default { setUserAlbums, setUserInfo, setUserPosts };