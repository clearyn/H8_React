import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { IKanbanBoard } from '../../type'
import thunk from 'redux-thunk'

const changeableBoard = [1, 2, 3]

export interface IAction {
    type: string
    newTask: string | undefined
    source: number | undefined
}

const initialState: IKanbanBoard[] = [
    {
        board: 1,
        task: "Example Backlog",
    },
    {
        board: 2,
        task: "Example Progress",
    },
    {
        board: 2,
        task: "Example Progress2",
    },
    {
        board: 3,
        task: "Example Evaluations",
    },
    {
        board: 4,
        task: "Example Done",
    },
];

//reducers
const kanban = (state = initialState, action: IAction) => {
    switch (action.type) {
        case "MOVE_ITEM":
            if ((action.source || action.source === 0) && changeableBoard.includes(state[action.source].board)) {
                let newState = [...state]
                newState[action.source].board += 1
                return newState
            } else {
                return state
            }
        case "ADD_ITEM":
            let addState = [...state]
            addState.push({
                board: 1,
                task: action.newTask
            } as IKanbanBoard)
            return addState
        default:
            return state
    }
}

//create store w enhancer
const kanbanStore = createStore(kanban, applyMiddleware(thunk))

export default kanbanStore