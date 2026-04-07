import React, { useState, useRef } from 'react'

const RenderCounter = () => {

    const renderCount = useRef(0)

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    renderCount.current++
  return (
    <div>
        <h2>useRef: Counting Renders</h2>
        <h3>Component Stats</h3>
        <p>Total times Rendered: {renderCount.current}</p>
        <p>Current Count value: {count}</p>
        <p>Name entered: {name || '(Not entered yet)'}</p>

        <h3>Causing re-renders</h3>
        <br />
        <button onClick={()=>setCount(count+1)}>increment count</button>
      
    </div>
  )
}

export default RenderCounter
