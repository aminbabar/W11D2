import React from "react"


const TodoListItem = (props) => {
    return (
        <li> 
            title: {props.todo.title}
            <br />
            body: {props.todo.body}
        </li>
    )
}


export default TodoListItem;