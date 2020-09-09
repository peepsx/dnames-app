import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './App';
import 'bootstrap/dist/css/boostrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/dnames.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);