import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  data: {
    name: '',
    rotation_period: null,
    orbital_period: null,
    diameter: null,
    climate: '',
    gravity: '',
    terrain: '',
    surface_water: null,
    population: null,
    residents: [],
    films: [],
  },
};

const planetSlice = createSlice({
  name: 'planet',
  initialState,
  reducers: {
    updateLoadStatePlanet: (state, action) => {
      state.isLoading = action.payload.isLoading;
      state.error = action.payload.error;
    },
    updateDataPlanet: (state, action) => {
      state.isLoading = false;
      state.data = {
        name: action.payload.name,
        rotation_periodr: action.payload.rotation_period,
        orbital_period: action.payload.orbital_period,
        diameter: action.payload.diameter,
        climate: action.payload.climate,
        gravity: action.payload.gravity,
        terrain: action.payload.terrain,
        surface_water: action.payload.surface_water,
        population: action.payload.population,
        residents: action.payload.residents,
        films: action.payload.films,
      };
    },
  },
});

export const {updateLoadStatePlanet, updateDataPlanet} = planetSlice.actions;

export default planetSlice.reducer;
