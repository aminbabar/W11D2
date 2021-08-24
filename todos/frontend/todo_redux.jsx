import ReactDOM from "react-dom";
import React from "react";
import configureStore from './store/store'
import { receiveTodo, receiveTodos, removeTodo }from './actions/todo_actions'
import { receiveStep, receiveSteps, removeStep } from './actions/step_actions'
document.addEventListener("DOMContentLoaded", ()=> {
    let content = document.getElementById("content");
    ReactDOM.render(<h1> Todos App</h1>, content);

    window.store = configureStore();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;


    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;
});