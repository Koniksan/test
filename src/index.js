import 'regenerator-runtime/runtime';
import './assets/style';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { configureStore } from './store';

const root = document.getElementById('root');
const store = configureStore();

root ? ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, root) : null;