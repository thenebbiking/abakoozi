import {
  NINJAS_LIST_REQUEST,
  NINJAS_LIST_REQUEST_SUCCESS,
  NINJAS_LIST_REQUEST_FAIL,
} from '../constants/ninjaConstants';

const initialState = {
  allNinjas: [],
  loading: false,
  paginateItems: 8,
};

export const ninjasListReducer = (state = initialState, action) => {
  switch (action.type) {
    case NINJAS_LIST_REQUEST:
      return { ...state, loading: true };
    case NINJAS_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        allNinjas: action.payload,
      };

    case NINJAS_LIST_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
