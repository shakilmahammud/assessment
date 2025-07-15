import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import tripReducer from './trip/tripSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trips: tripReducer,
  },
});
