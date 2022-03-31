import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import Modal from './Components/Modal';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>

      <div>
        <p>Hello</p>
        <Modal/>
      </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
