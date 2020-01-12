import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import App from './components/App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
