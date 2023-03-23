import common from './reducers/common.reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  common,
});

const rootReducerWrapper = (state, action) => {
  // #TODO Based on a specific action reset application state
  //   if (action.type === '') {
  //     state = getInitialState();
  //   }
  return rootReducer(state, action);
};

export default rootReducerWrapper;
