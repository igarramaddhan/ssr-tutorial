import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

ReactDOM.hydrate(<App name={window['__INITIAL_DATA__']} />, document.getElementById('app'));
