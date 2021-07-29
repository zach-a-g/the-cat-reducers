import './App.css';
import Activity from './components/Activity';

import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Activity />
      </div>
    </Provider>
    
  );
}

export default App;
