import { connect } from 'react-redux';
import todoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, receiveTodos, removeTodo, changeStatus } from '../../actions/todo_actions';
import { receiveStep, receiveSteps, removeStep } from '../../actions/step_actions';

const mSTP = (state) => {
    // debugger;
    // window.state = state;
    return ({
        todos: allTodos(state)
    });
}

const mDTP = (dispatch) => {
    // debugger;
    return ({
        receiveTodo: (todo) => { dispatch(receiveTodo(todo)) },
        removeTodo: (todo) => { dispatch(removeTodo(todo)) },
        changeStatus: (todo) => { dispatch(changeStatus(todo)) }
    });
}

export default connect(mSTP, mDTP)(todoList);