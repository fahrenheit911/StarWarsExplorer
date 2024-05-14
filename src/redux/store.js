import {configureStore} from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';
import personReducer from './personSlice';
import planetsReducer from './planetsSlice';

export const store = configureStore({
  reducer: {people: peopleReducer, person: personReducer, planets: planetsReducer},
});
