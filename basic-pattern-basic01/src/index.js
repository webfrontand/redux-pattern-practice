import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import { increment, decrement, clear } from './actions/number';

export const store = createStore(reducers);
console.log(store.getState());
store.subscribe(() => { console.log(store.getState()) })

store.dispatch(increment());
store.dispatch(increment());

store.dispatch(clear());

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
