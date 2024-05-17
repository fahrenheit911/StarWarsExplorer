import {configureStore} from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';
import personReducer from './personSlice';
import planetsReducer from './planetsSlice';
import planetReducer from './planetSlice';
import starshipsReducer from './starshipsSlice';
import starshipReducer from './starshipSlice';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    person: personReducer,
    planets: planetsReducer,
    planet: planetReducer,
    starships: starshipsReducer,
    starship: starshipReducer,
  },
});
