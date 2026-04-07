import React, { useReducer, useState } from 'react';

const initialValue ={
    count: 0
}
function reducer(state, action)
{
    switch(action.type)
    {
        case 'INCREMENT':
            return {count:state.count + 1}
        case 'DECREMENT':
            return {count:state.count >0 ? state.count-1:0}
        default:
            return state
    }
}

function Counter() {
//   const [count, setCount] = useState(0);
  const[state, dispatch] = useReducer(reducer, initialValue)
  
//   const increment = () => setCount(prev => prev + 1);
//   const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
      <button onClick={()=>dispatch({type: 'DECREMENT'})}>Decrement</button>
    </div>
  );
}

export default Counter;
