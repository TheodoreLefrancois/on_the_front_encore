import { CLEAR_LOCAL_STORAGE, SET_LOCAL_STORAGE } from './actionType';

const tokenReducer = (state, action) => {
  switch (action.Type) {
    case SET_LOCAL_STORAGE:
      return { ...state, token: action.payload.token };
    case CLEAR_LOCAL_STORAGE:
      return { ...state, token: null };
    default:
      return state;
  }
};

export default tokenReducer;
