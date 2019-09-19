import './assets/style';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/app';



const root = document.getElementById('root');

root ? ReactDOM.render(<App />, root) : null;