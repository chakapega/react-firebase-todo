import { CHANGE_USER_UID } from './userActionTypes';

export const changeUserUid = uid => {
  return {
    type: CHANGE_USER_UID,
    payload: uid,
  };
};