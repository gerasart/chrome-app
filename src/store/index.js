import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './slices/user';

const reducer = {
  user: userReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
