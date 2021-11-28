import {IKanbanBoard } from '../../type'

export function moveItem(source: number) {
    return { type: 'MOVE_ITEM', source: source}
}

export function addItem(newTask:string) {
    return { type: 'ADD_ITEM', newTask: newTask}
}