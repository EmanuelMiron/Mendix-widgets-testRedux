import { counterAction } from "src/actions/counterActons";

export interface CounterState {
    counter: number
}

const initialState = {
    counter: 0
}

export default function counterReducer(state:CounterState = initialState, action: counterAction ){
    switch(action.type){
        case "INCREASE": {
            return {...state, counter: state.counter + 1}
        }
        case "DECREASE": {
            return {...state, counter: state.counter - 1}
        }
        default :
            return state;
    }
}