import axios from 'axios';
import {
  NINJAS_LIST_REQUEST,
  NINJAS_LIST_REQUEST_SUCCESS,
  NINJAS_LIST_REQUEST_FAIL,
} from '../constants/ninjaConstants';

const DATA_URL = 'https://api.tretton37.com/ninjas';

export const getNinjas = () => async (dispatch) => {
  try {
    dispatch({ type: NINJAS_LIST_REQUEST });

    const { data } = await axios.get(DATA_URL);

    dispatch({
      type: NINJAS_LIST_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    //   Improve error handling
    dispatch({
      type: NINJAS_LIST_REQUEST_FAIL,
      payload: error,
    });
  }
};
