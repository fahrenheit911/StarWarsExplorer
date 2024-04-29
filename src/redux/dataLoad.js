import {updateLoadState, updateData} from './peopleSlice.js';

export const dataLoad = () => async dispatch => {
  try {
    dispatch(updateLoadState({state: true, error: null}));
    const response = await fetch('https://swapi.py4e.com/api/people/?page=1');
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

export const nextDataLoad = nextPage => async dispatch => {
  try {
    dispatch(updateLoadState({state: true, error: null}));
    const response = await fetch(nextPage);
    if (response.ok) {
      const newData = await response.json();
      dispatch(updateLoadState({isLoading: true, error: null}));

      // Вот тут не знаю, правильно ли я передаю старый стейт (думаю, что нет)

      dispatch(updateData(pre => [...pre, ...newData]));
    } else {
      dispatch(updateLoadState({isLoading: false, error: 'HTTP error ' + response.status}));
    }
  } catch (err) {
    dispatch(updateLoadState({isLoading: false, error: err.message}));
  }
};
