import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import tokenReducer from './token/reducer';

const rootReducer = combineReducers({
  tokenReducer,
});

const store = createStore(rootReducer, devToolsEnhancer({}));

export default store;
