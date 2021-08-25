import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const todoList = (props) => {

   let todos = props.todos
   const todoLis = todos.map((todo) => { 
      return (
         <TodoListItem key={todo.id} todo={todo} />
      ) 
   });


   // debugger;
   return (
      <div>
         <h1>Todos List: </h1>
         <ul>
            {todoLis}
         </ul>

         <TodoForm  receiveTodo={props.receiveTodo} />
      </div>
   )
   // return <h3>Todo List goes here!</h3>
}

export default todoList;