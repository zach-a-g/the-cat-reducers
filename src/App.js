import React from 'react';
import CatActivities from './components/CatActivities';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CatActivities />
      </div>
    </Provider>
  );
}

export default App;
