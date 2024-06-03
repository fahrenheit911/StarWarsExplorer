import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  data: {
    name: '',
    model: '',
    manufacturer: '',
    cost_in_credits: null,
    length: null,
    max_speed: null,
    crew: null,
    passengers: null,
    cargo_capacity: null,
    consumables: '',
    hyperdrive_rating: null,
    MGLT: null,
    starship_class: '',
    films: [],
    pilots: [],
  },
};

const starshipSlice = createSlice({
  name: 'starship',
  initialState,
  reducers: {
    updateLoadStateStarship: (state, action) => {
      state.isLoading = action.payload.isLoading;
      state.error = action.payload.error;
    },
    updateDataStarship: (state, action) => {
      state.isLoading = false;
      state.data = {
        name: action.payload.name,
        model: action.payload.model,
        manufacturer: action.payload.manufacturer,
        cost_in_credits: action.payload.cost_in_credits,
        length: action.payload.length,
        max_speed: action.payload.max_speed,
        crew: action.payload.crew,
        passengers: action.payload.passengers,
        cargo_capacity: action.cargo_capacityargo_capacity,
        consumables: action.payload.consumables,
        hyperdrive_rating: action.payload.hyperdrive_rating,
        MGLT: action.payload.MGLT,
        starship_class: action.payload.starship_class,
        films: action.payload.films,
        pilots: action.payload.pilots,
      };
    },
  },
});

export const {updateLoadStateStarship, updateDataStarship} = starshipSlice.actions;

export default starshipSlice.reducer;
