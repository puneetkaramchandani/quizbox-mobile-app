import {getInitialCommonState} from './reducers/common.reducer';

export const getInitialState = () => {
  return {
    common: getInitialCommonState(),
  };
};
