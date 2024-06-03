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

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    updateLoadStatePlanets: (state, action) => {
      state.isLoading = action.payload.isLoading;
      state.error = action.payload.error;
    },
    updateDataPlanets: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    updateNewDataPlanets: (state, action) => {
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
  updateLoadStatePlanets,
  updateDataPlanets,
  updateNewDataPlanets,
} = planetsSlice.actions;

export default planetsSlice.reducer;
