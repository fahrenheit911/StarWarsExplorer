import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    updateLoadStatePerson: (state, action) => {
      state.isLoading = action.payload.state;
      state.error = action.payload.error;
    },
    updateDataPerson: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {updateLoadStatePerson, updateDataPerson} = personSlice.actions;

export default personSlice.reducer;
