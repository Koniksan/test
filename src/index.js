import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/app';

import './assets/style';


const root = document.getElementById('root');

root ? ReactDOM.render(<App />, root) : null;