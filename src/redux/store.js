import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './user/user-reducer';
import usersInfoReducer from './users-info/users-info-reducer';
//  const middleware = [...getDefaultMiddleware, logger]
const store = configureStore({
    reducer: {
    users: usersInfoReducer,
    user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});
export default store;