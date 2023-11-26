import { IBeer } from '@/types/api';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface BeerState {
  beerList: {
    [key: number]: IBeer[] | undefined;
  };
}

const initialState: BeerState = {
  beerList: {},
};

export const beerSlice = createSlice({
  name: 'beer',
  initialState,
  reducers: {
    setBeersList: (
      state,
      action: PayloadAction<{ page: number; beerList?: IBeer[] }>,
    ) => {
      state.beerList[action.payload.page] = action.payload.beerList;
    },
  },
});

export const { setBeersList } = beerSlice.actions;

export default beerSlice.reducer;
