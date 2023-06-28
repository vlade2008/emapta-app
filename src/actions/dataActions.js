import {FETCH_SUCCESS, FETCH_ERROR} from '../reducers/dataReducer';
import api from '../services/api';

export const fetchData = () => {
  return async dispatch => {
    try {
      const response = await api.getData();
      dispatch({type: FETCH_SUCCESS, payload: response});
    } catch (error) {
      dispatch({type: FETCH_ERROR});
    }
  };
};

export const postData = data => {
  return async dispatch => {
    try {
      const response = await api.postData(data);
      dispatch({type: FETCH_SUCCESS, payload: response});
    } catch (error) {
      dispatch({type: FETCH_ERROR});
    }
  };
};
