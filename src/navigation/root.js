import {Provider} from '@ant-design/react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import NavigationProvider from '../providers/navigation.provider';
import screens from './screens';

const Root = () => {
  const common = useSelector(state => state.common);
  console.log(common);

  return (
    <Provider>
      <NavigationProvider>{screens()}</NavigationProvider>
    </Provider>
  );
};

export default Root;
