import { createStore } from 'redux';
import { changeSomething } from './reducers';

//Default state
const defaultState = {
    name: 'Raider',
    activity: 'napping'
};

export const store = createStore(changeSomething, defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);