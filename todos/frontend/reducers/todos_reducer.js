import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, CHANGE_STATUS} from "../actions/todo_actions";


const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

// {
//     1: {
//         2: {

//         }
//     }
// }


const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        
        case RECEIVE_TODO:
            newState[action.todo.id] = action.todo;
            return newState;
        case RECEIVE_TODOS:
            // debugger;
            // [{}, {}., {}]
            newState = {};
            for (let obj of action.todos) {
                newState[obj.id] = obj;
            }
            // newState[action.todos.id] = {...action.todos};
            return newState;
        case REMOVE_TODO:
            delete newState[action.todo.id];
            console.log(newState);
            console.log(state);
            return newState;
        case CHANGE_STATUS:
            newState[action.todo.id].done = !newState[action.todo.id].done;
            return newState;
        default:
            return state;
    }
};

export default todosReducer;

























// {
//     todos: {
//         1: {

//         },
//         2: {

//         }
//         3: {

//         }

//     },

//     etc: {
//         1: {

//         },
//         2: {

//         }
//     }

// }
