import { SET_LOCAL_STORAGE } from './actionType';

export const setLocalStorage = (token) => {
  return {
    type: SET_LOCAL_STORAGE,
    payload: {
      token,
    },
  };
};

export const clearLocalStorage = (token) => {
  return {
    type: SET_LOCAL_STORAGE,
    payload: {
      token,
    },
  };
};
