import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INTITIAL_STATE = {};

export default (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
