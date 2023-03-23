import React from 'react';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import Root from './navigation/root';

const App = () => {
  return (
    <Provider store={store}>
        <Root />
    </Provider>
  );
};

export default App;
