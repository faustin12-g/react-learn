import React, { useReducer } from 'react'

const initialState = {
    count: 0
}

const reducer = (state, action) =>{
    switch(action.type)
    {
        case 'INCREMENT':
            return {count: state.count+1}
        case 'DECREMENT':
            return {count: state.count-1}
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div style={{ padding: '20px', textAlign: 'center'}}>
        <h2>Counter with reducer</h2>
        <h1>{state.count}</h1>

        <button onClick={()=>dispatch({type: 'INCREMENT'})}>Increment </button>
        <button onClick={()=>dispatch({type: 'DECREMENT'})}>Decrement </button>
        <button onClick={()=>dispatch({type: 'RESET'})}>Reset </button>
      
    </div>
  )
}

export default Counter
