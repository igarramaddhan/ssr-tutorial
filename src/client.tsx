import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.hydrate(
  <BrowserRouter>
    <App name={window['__INITIAL_DATA__']} />
  </BrowserRouter>,
  document.getElementById('app')
);
