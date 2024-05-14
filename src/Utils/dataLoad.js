import {updateLoadStatePeople, updateNewDataPeople} from '../redux/peopleSlice.js';
import {updateLoadStatePerson, updateDataPerson} from '../redux/personSlice.js';

export const loadData = (url, updateLoadStateAction, updateDataAction) => async dispatch => {
  try {
    dispatch(updateLoadStateAction({isLoading: true, error: null}));
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      dispatch(updateLoadStateAction({isLoading: true, error: null}));
      dispatch(updateDataAction(data));
    } else {
      dispatch(updateLoadStateAction({isLoading: false, error: 'HTTP error ' + response.status}));
    }
  } catch (err) {
    dispatch(updateLoadStateAction({isLoading: false, error: err.message}));
  }
};

export const nextLoadData = nextUrl => async dispatch => {
  try {
    dispatch(updateLoadStatePeople({isLoading: true, error: null}));
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

const fetchJsonData = async url => {
  const response = await fetch(url);
  return response.json();
};

export const getPersonData = personUrlId => async dispatch => {
  try {
    dispatch(updateLoadStatePerson({isLoading: true, error: null}));
    const response = await fetch(`https://swapi.py4e.com/api/people/${personUrlId}`);

    if (response.ok) {
      const data = await response.json();

      data.homeworld = await fetchJsonData(data.homeworld);
      data.films = await Promise.all(data.films.map(film => fetchJsonData(film)));
      data.vehicles = await Promise.all(data.vehicles.map(vehicle => fetchJsonData(vehicle)));
      data.starships = await Promise.all(data.starships.map(starship => fetchJsonData(starship)));

      dispatch(updateDataPerson(data));
    } else {
      dispatch(updateLoadStatePerson({isLoading: false, error: 'HTTP error ' + response.status}));
    }
  } catch (err) {
    dispatch(updateLoadStatePerson({isLoading: false, error: err.message}));
  }
};
