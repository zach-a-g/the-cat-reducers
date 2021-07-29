import { createStore } from 'redux';
import { catState } from './reducers';
// Default state
const defaultState = {
	activity: 'napping'
};

export const store = createStore(
	catState, 
	defaultState, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);