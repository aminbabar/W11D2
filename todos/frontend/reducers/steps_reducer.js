
import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from '../actions/step_actions'


const stepsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {

        case RECEIVE_STEP:
            newState[action.step.id] = action.step;
            return newState;
        case RECEIVE_STEPS:
            // debugger;
            // [{}, {}., {}]
            newState = {};
            for (let obj of action.steps) {
                newState[obj.id] = obj;
            }
            // newState[action.steps.id] = {...action.steps};
            return newState;
        case REMOVE_STEP:
            delete newState[action.step.id];
            // console.log(newState);
            // console.log(state);
            return newState;
        default:
            return state;
    }
};

export default stepsReducer;

