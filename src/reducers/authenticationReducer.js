import { CHANGE_USER_UID } from '../actions/userActionTypes';

const initialState = {
  uid: '',
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_UID:
      return { ...state, uid: action.payload };
    default:
      return state
  }
};

export default authenticationReducer;