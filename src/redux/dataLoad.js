import {updateLoadState, updateData} from './peopleSlice.js';

export async function dataLoad(dispatch) {
  try {
    dispatch(updateLoadState({state: 1, error: null}));
    const response = await fetch('https://swapi.py4e.com/api/people');
    if (response.ok) {
      const data = await response.json();
      dispatch(updateLoadState({state: 2, error: null}));
      dispatch(updateData(data));
    } else {
      dispatch(updateLoadState({state: 3, error: 'HTTP error ' + response.status}));
    }
  } catch (err) {
    dispatch(updateLoadState({state: 3, error: err.message}));
  }
}
