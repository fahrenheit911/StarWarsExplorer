import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  data: {
    name: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    gender: '',
    height: null,
    mass: null,
    homeworld: '',
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
        hair_color: action.payload.hair_color,
        skin_color: action.payload.skin_color,
        eye_color: action.payload.eye_color,
        gender: action.payload.gender,
        height: action.payload.height,
        mass: action.payload.mass,
        homeworld: action.payload.homeworld,
        films: action.payload.films,
        vehicles: action.payload.vehicles,
        starships: action.payload.starships,
      };
    },
  },
});

export const {updateLoadStatePerson, updateDataPerson} = personSlice.actions;

export default personSlice.reducer;
