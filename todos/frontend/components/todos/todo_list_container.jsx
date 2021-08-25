import { connect } from 'react-redux';
import todoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, receiveTodos, removeTodo } from '../../actions/todo_actions';
import { receiveStep, receiveSteps, removeStep } from '../../actions/step_actions';

const mSTP = (state) => {
    return ({
        todos: () => { allTodos(state) }
    });
}

const mDTP = (dispatch) => {
    return ({
        receiveTodo: (todo) => { dispatch(receiveTodo(todo)) }
    });
}

export default connect(mSTP, mDTP)(todoList);