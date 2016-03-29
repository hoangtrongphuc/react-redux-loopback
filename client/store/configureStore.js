import { createStore } from 'redux';
import homeApp from '../reducers';

export default function configureStore(initialState) {
  	const store = createStore(homeApp);
  	return store;
}
