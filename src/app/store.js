import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appSlice from '../features/appSlice';
 
export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appSlice,
  },
});
