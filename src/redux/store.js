import thunk from 'redux-thunk';
import rootreducer from './rootReducer';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootreducer,
  devTools: true,
  middleware: [thunk],
});

const dispatch = action => {
  if (store != undefined) {
    return store.dispatch(action);
  }
};

export {store, dispatch};
