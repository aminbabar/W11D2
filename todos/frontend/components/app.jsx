import React from 'react';
import TodoListContainer from './todos/todo_list_container';
import TodoDetailViewContainer from "./todos/todo_detail_view_container";

const App = () => {
    return (
        <div>
            <TodoListContainer />
            <TodoDetailViewContainer />
        </div>
    );
}

export default App;