import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, receiveTodos, removeTodo, changeStatus } from '../../actions/todo_actions';
import { receiveStep, receiveSteps, removeStep } from '../../actions/step_actions';




const mDTP = (dispatch) => {
    return ({
        removeTodo: (todo) => { dispatch(removeTodo(todo)) }
    });
}



export default connect(null, mDTP)(TodoDetailView);