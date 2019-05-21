import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ToDoList from './list';

const list = [];
ReactDOM.render(
    <ToDoList toDoList={list}/>, 
    document.getElementById('root')
);

serviceWorker.unregister();
