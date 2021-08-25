import ReactDOM from "react-dom";
import React from "react";
import configureStore from './store/store'
import { receiveTodo, receiveTodos, removeTodo }from './actions/todo_actions'
import { receiveStep, receiveSteps, removeStep } from './actions/step_actions'
import { allTodos } from "./reducers/selectors";
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=> {
    let content = document.getElementById("content");
    ReactDOM.render(<Root store={configureStore()} />, content);

    
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;


    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;
    window.allTodos = allTodos;
});