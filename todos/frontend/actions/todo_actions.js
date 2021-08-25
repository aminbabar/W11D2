export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CHANGE_STATUS = "CHANGE_STATUS";


export const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos
});


export const receiveTodo = (todo) => {
    debugger;
    return ({
        type: RECEIVE_TODO,
        todo
    })
}


export const removeTodo = (todo) => ({
    type: REMOVE_TODO,
    todo
});

export const changeStatus = (todo) => ({
    type: CHANGE_STATUS,
    todo
});