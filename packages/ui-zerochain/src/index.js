import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import {render} from 'react-dom';
import App from './app.jsx';
import {setNodeUri} from 'oo7-zerochain'
// const setNodeUri = require('oo7-zerochain');
import './denominations';

setNodeUri(['ws://127.0.0.1:9944/', 'wss://substrate-rpc.parity.io/'])

render(<App/>, document.getElementById('app'));
// render(<p>Hi!</p>, document.getElementById('app'));
