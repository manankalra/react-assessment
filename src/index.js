import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './state/store';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Main from './Component/Main';

import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

//ReactDOM.render(<Main />,document.getElementById('root'));
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
registerServiceWorker();
