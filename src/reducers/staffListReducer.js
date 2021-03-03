import {
  STAFF_LIST_REQUEST,
  STAFF_LIST_REQUEST_SUCCESS,
  STAFF_LIST_REQUEST_FAIL,
} from '../constants/staffConstants';

const initialState = {
  staff: [],
  loading: false,
  paginateItems: 8,
};

export const staffListReducer = (state = initialState, action) => {
  switch (action.type) {
    case STAFF_LIST_REQUEST:
      return { ...state, loading: true };
    case STAFF_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        staff: action.payload,
      };

    case STAFF_LIST_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
