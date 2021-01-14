import { CLEAR_LOCAL_STORAGE, SET_LOCAL_STORAGE } from './actionType';

const initialState = {
  token: null,
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCAL_STORAGE:
      return { ...state, token: action.payload.token };
    case CLEAR_LOCAL_STORAGE:
      return { ...state, token: null };
    default:
      return state;
  }
};

export default tokenReducer;
