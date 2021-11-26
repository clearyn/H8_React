export function increment() {
    return async(dispatch: any) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json = await response.json()
        console.log(json)
        setTimeout(() => {
            dispatch({ type: 'INCREMENT'})
        }, 2000)
    }
}

export function decrement() {
    return { type: 'DECREMENT' }
}

export function setCounter(value:number) {
    return { type: 'SET_COUNTER', payload: value}
}