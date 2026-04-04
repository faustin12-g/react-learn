import React, { useState, useRef } from 'react'

const RefExample = () => {
    const [stateCounter, setStateCounter] = useState(0)
    const refCounter = useRef(0)

    const handleStateClick = () =>{
        setStateCounter(stateCounter+1)
        console.log('state counter ', stateCounter)
    }

    const handleRefClick = () =>{
        refCounter.current ++
        console.log('Ref counter ', refCounter.current)
    }
  return (
    <div style={{padding:'20-x'}}>
        <h2>useReF Vs useState</h2>
        <div style={{backgroundColor: '#f0f0f0', padding: '15px', marginBottom:'20px'}}>
            <h3>useState Example </h3>
            <p>State Counter: {stateCounter}</p>
            <button onClick={handleStateClick} style={{padding: '10px', marginRight: '10px'}}>Imcrement state</button>

            <p style={{ fontSize: '12px', color: 'gray' }}>Watch console - Re-render!</p>


        </div>
        <div style={{backgroundColor: '#fff3cd', padding: '15px', marginBottom:'20px'}}>
            <h3>useRef Example </h3>
            <p>Ref Counter: {refCounter.current}</p>
            <button onClick={handleRefClick} style={{padding: '10px', marginRight: '10px'}}>Imcrement state</button>

            <p style={{ fontSize: '12px', color: 'gray' }}>Watch console - NO component re-render! Value stays 0 on screen</p>


        </div>

      
    </div>
  )
}

export default RefExample
