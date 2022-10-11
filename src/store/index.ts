import {configureStore} from '@reduxjs/toolkit';
import {AuthReducer} from './slices';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type GlobalState = typeof store;
