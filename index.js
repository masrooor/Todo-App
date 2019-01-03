import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Clock from './clock1';
//import Counter from './indec';
import Todo from './TodoForm';
//import Todoform from './list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Todo />, document.getElementById('root'));
registerServiceWorker();
