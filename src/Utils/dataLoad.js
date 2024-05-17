import {updateLoadStatePerson, updateDataPerson} from '../redux/personSlice.js';
import {updateLoadStatePlanet, updateDataPlanet} from '../redux/planetSlice.js';
import {updateLoadStateStarship, updateDataStarship} from '../redux/starshipSlice.js';

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

export const nextLoadData = (
  nextUrl,
  updateLoadStateAction,
  updateNewDataAction
) => async dispatch => {
  try {
    dispatch(updateLoadStateAction({isLoading: true, error: null}));
    const response = await fetch(nextUrl);

    if (response.ok) {
      const newData = await response.json();
      dispatch(updateLoadStateAction({isLoading: true, error: null}));
      dispatch(updateNewDataAction(newData));
    } else {
      dispatch(updateLoadStateAction({isLoading: false, error: 'HTTP error ' + response.status}));
    }
  } catch (err) {
    dispatch(updateLoadStateAction({isLoading: false, error: err.message}));
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

export const getPlanetData = planetUrlId => async dispatch => {
  try {
    dispatch(updateLoadStatePlanet({isLoading: true, error: null}));
    const response = await fetch(`https://swapi.py4e.com/api/planets/${planetUrlId}`);

    if (response.ok) {
      const data = await response.json();

      data.residents = await Promise.all(data.residents.map(resident => fetchJsonData(resident)));
      data.films = await Promise.all(data.films.map(film => fetchJsonData(film)));

      dispatch(updateDataPlanet(data));
    } else {
      dispatch(updateLoadStatePlanet({isLoading: false, error: 'HTTP error ' + response.status}));
    }
  } catch (err) {
    dispatch(updateLoadStatePlanet({isLoading: false, error: err.message}));
  }
};

export const getStarshipData = starshipUrlId => async dispatch => {
  try {
    dispatch(updateLoadStateStarship({isLoading: true, error: null}));
    const response = await fetch(`https://swapi.py4e.com/api/starships/${starshipUrlId}`);

    if (response.ok) {
      const data = await response.json();

      data.pilots = await Promise.all(data.pilots.map(pilot => fetchJsonData(pilot)));
      data.films = await Promise.all(data.films.map(film => fetchJsonData(film)));

      dispatch(updateDataStarship(data));
    } else {
      dispatch(updateLoadStateStarship({isLoading: false, error: 'HTTP error ' + response.status}));
    }
  } catch (err) {
    dispatch(updateLoadStateStarship({isLoading: false, error: err.message}));
  }
};
