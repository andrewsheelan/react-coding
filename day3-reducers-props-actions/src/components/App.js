import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import store from '../store';

function App() {
  return (
    <div className="root">
      <Provider store={store}>
        <Header/>
      </Provider>
    </div>
  );
}

export default App; 
