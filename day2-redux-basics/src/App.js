import React from 'react';
import Page from './Page';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Page />
      </Provider>
    </div>
  );
}

export default App;
