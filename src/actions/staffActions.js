import axios from 'axios';
import {
  STAFF_LIST_REQUEST,
  STAFF_LIST_REQUEST_SUCCESS,
  STAFF_LIST_REQUEST_FAIL,
} from '../constants/staffConstants';

const DATA_URL = 'https://api.tretton37.com/ninjas';

export const getTretton37Staff = () => async (dispatch) => {
  try {
    dispatch({ type: STAFF_LIST_REQUEST });

    const { data } = await axios.get(DATA_URL);

    dispatch({
      type: STAFF_LIST_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    //   Improve error handling
    dispatch({
      type: STAFF_LIST_REQUEST_FAIL,
      payload: error,
    });
  }
};
