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
  },
});

export const {updateLoadState, updateData} = peopleSlice.actions;

export default peopleSlice.reducer;
