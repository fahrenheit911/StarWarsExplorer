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

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    updateLoadState: (state, action) => {
      state.isLoading = action.payload.state;
      state.error = action.payload.error;
    },
    updateData: (state, action) => {
      state.data = action.payload;
    },
    updateNewData: (state, action) => {
      state.data = {
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
        results: [...state.data.results, ...action.payload.results],
      };
    },
  },
});

export const {updateLoadState, updateData, updateNewData} = peopleSlice.actions;

export default peopleSlice.reducer;
