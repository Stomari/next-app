import { configureStore } from '@reduxjs/toolkit';
import beerReducer from './beer/beerSlice';

export const store = configureStore({
  reducer: { beerReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
