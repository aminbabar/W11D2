import React from "react"


const TodoListItem = (props) => {
    const handleDelete = () => {
        props.removeTodo(props.todo)
    }

    const handleUndo = () => {
        props.changeStatus(props.todo)
    }

    let status = props.todo.done ? "Undo" : "Done";

    return (
        <li> 
            title: {props.todo.title}
            <br />
            body: {props.todo.body}
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleUndo}>{status}</button>
        </li>
    )
}


export default TodoListItem;