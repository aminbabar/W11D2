import ReactDOM from "react-dom";
import React from "react";
import configureStore from './store/store'
import { receiveTodo }from './actions/todo_actions'

document.addEventListener("DOMContentLoaded", ()=> {
    let content = document.getElementById("content");
    ReactDOM.render(<h1> Todos App</h1>, content);

    window.store = configureStore();
    window.receiveTodo = receiveTodo;
});