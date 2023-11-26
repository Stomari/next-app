import { listBeers } from '@/api';
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { setBeersList } from './beerSlice';

export const fetchBeersByPage =
  (page: number): ThunkAction<void, RootState, unknown, Action<any>> =>
  async (dispatch) => {
    const beerList = await listBeers(undefined, page);
    dispatch(setBeersList({ page, beerList }));
  };
