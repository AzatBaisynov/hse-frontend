import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HSEProject from './components/HSEProject';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <HSEProject />
  </Provider>
  ,
  document.getElementById('root')
);