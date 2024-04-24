import {updateLoadState, updateData} from './peopleSlice.js';

export async function dataLoad(dispatch) {
  try {
    dispatch(updateLoadState({state: true, error: null}));
    const response = await fetch('https://swapi.py4e.com/api/people');
    if (response.ok) {
      const data = await response.json();
      dispatch(updateLoadState({state: true, error: null}));
      dispatch(updateData(data));
    } else {
      dispatch(updateLoadState({state: false, error: 'HTTP error ' + response.status}));
    }
  } catch (err) {
    dispatch(updateLoadState({state: false, error: err.message}));
  }
}
