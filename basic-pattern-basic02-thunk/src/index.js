import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import './styles/style.css';

const store = createStore(reducers, applyMiddleware(thunk, promiseMiddleware()));

console.log(store.getState());
store.subscribe(() => { console.log(store.getState()) })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
