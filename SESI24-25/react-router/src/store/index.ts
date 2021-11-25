import { Action, createStore} from 'redux'
// const { createStore } = require('redux')

export interface myCounter{
    counter: number | undefined
}

export interface myAction extends Action{
    type: string
    payload?: number
}

const initialState:myCounter = {
    counter: 0
}

//reducers
const counter = (state = initialState, action: myAction) => {
    console.log(action)
    switch (action.type) {
        case "SET_COUNTER":
            return { counter : action.payload }
        case "INCREMENT":
            return { counter: state.counter! + 1 }
        case "DECREMENT":
            return { counter: state.counter! - 1 }
        default:
            return state
    }
}

//create store here
const store = createStore<myCounter, myAction, unknown, unknown>(counter)

//get state from store
// store.subscribe(() => {
//     console.log(store.getState())
// })
export default store

// store.dispatch({ type: 'INCREMENT'})
// store.dispatch({ type: 'INCREMENT'})
// store.dispatch({ type: 'SET_COUNTER', data: 67})
// store.dispatch({ type: 'INCREMENT'})