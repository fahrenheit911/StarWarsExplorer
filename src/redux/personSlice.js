import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  data: {
    name: '',
    films: [],
    vehicles: [],
    starships: [],
  },
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
      state.data = {
        name: action.payload.name,
        films: action.payload.films,
        vehicles: action.payload.vehicles,
        starships: action.payload.starships,
      };
    },
  },
});

export const {updateLoadStatePerson, updateDataPerson} = personSlice.actions;

export default personSlice.reducer;
