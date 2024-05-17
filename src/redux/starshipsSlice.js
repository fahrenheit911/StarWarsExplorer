import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  data: {
    count: null,
    next: '',
    previous: '',
    results: [],
  },
};

const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    updateLoadStateStarships: (state, action) => {
      state.isLoading = action.payload.isLoading;
      state.error = action.payload.error;
    },
    updateDataStarships: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    updateNewDataStarships: (state, action) => {
      state.isLoading = false;
      state.data = {
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
        results: [...state.data.results, ...action.payload.results],
      };
    },
  },
});

export const {
  updateLoadStateStarships,
  updateDataStarships,
  updateNewDataStarships,
} = starshipsSlice.actions;

export default starshipsSlice.reducer;
