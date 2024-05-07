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
    updateLoadStatePeople: (state, action) => {
      state.isLoading = action.payload.state;
      state.error = action.payload.error;
    },
    updateDataPeople: (state, action) => {
      state.data = action.payload;
    },
    updateNewDataPeople: (state, action) => {
      state.data = {
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
        results: [...state.data.results, ...action.payload.results],
      };
    },
  },
});

export const {updateLoadStatePeople, updateDataPeople, updateNewDataPeople} = peopleSlice.actions;

export default peopleSlice.reducer;
