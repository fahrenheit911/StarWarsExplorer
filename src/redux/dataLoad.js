import {updateLoadStatePeople, updateDataPeople, updateNewDataPeople} from './peopleSlice.js';
import {updateLoadStatePerson, updateDataPerson} from './personSlice.js';

export const loadData = () => async dispatch => {
  try {
    dispatch(updateLoadStatePeople({state: true, error: null}));
    const response = await fetch('https://swapi.py4e.com/api/people');
    if (response.ok) {
      const data = await response.json();
      dispatch(updateLoadStatePeople({isLoading: true, error: null}));
      dispatch(updateDataPeople(data));
    } else {
      dispatch(updateLoadStatePeople({isLoading: false, error: 'HTTP error ' + response.status}));
    }
  } catch (err) {
    dispatch(updateLoadStatePeople({isLoading: false, error: err.message}));
  }
};

export const nextLoadData = nextUrl => async dispatch => {
  try {
    dispatch(updateLoadStatePeople({state: true, error: null}));
    const response = await fetch(nextUrl);

    if (response.ok) {
      const newData = await response.json();
      dispatch(updateLoadStatePeople({isLoading: true, error: null}));
      dispatch(updateNewDataPeople(newData));
    } else {
      dispatch(updateLoadStatePeople({isLoading: false, error: 'HTTP error ' + response.status}));
    }
  } catch (err) {
    dispatch(updateLoadStatePeople({isLoading: false, error: err.message}));
  }
};

export const getPersonData = personUrlId => async dispatch => {
  try {
    dispatch(updateLoadStatePerson({state: true, error: null}));
    const response = await fetch(`https://swapi.py4e.com/api/people/${personUrlId}`);

    if (response.ok) {
      const data = await response.json();
      dispatch(updateLoadStatePerson({isLoading: true, error: null}));
      dispatch(updateDataPerson(data));
      console.log(data);
    } else {
      dispatch(updateLoadStatePerson({isLoading: false, error: 'HTTP error ' + response.status}));
    }
  } catch (err) {
    dispatch(updateLoadStatePerson({isLoading: false, error: err.message}));
  }
};
