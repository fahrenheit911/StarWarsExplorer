import {updateLoadState, updateData, updateNewData} from './peopleSlice.js';

export const loadData = () => async dispatch => {
  try {
    dispatch(updateLoadState({state: true, error: null}));
    const response = await fetch('https://swapi.py4e.com/api/people');
    if (response.ok) {
      const data = await response.json();
      dispatch(updateLoadState({isLoading: true, error: null}));
      dispatch(updateData(data));
    } else {
      dispatch(updateLoadState({isLoading: false, error: 'HTTP error ' + response.status}));
    }
  } catch (err) {
    dispatch(updateLoadState({isLoading: false, error: err.message}));
  }
};

export const nextLoadData = nextUrl => async dispatch => {
  try {
    dispatch(updateLoadState({state: true, error: null}));
    const response = await fetch(nextUrl);

    if (response.ok) {
      const newData = await response.json();
      dispatch(updateLoadState({isLoading: true, error: null}));
      dispatch(updateNewData(newData));
    } else {
      dispatch(updateLoadState({isLoading: false, error: 'HTTP error ' + response.status}));
    }
  } catch (err) {
    dispatch(updateLoadState({isLoading: false, error: err.message}));
  }
};
