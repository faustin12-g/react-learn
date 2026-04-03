import { useEffect, useMemo, useCallback, useState } from "react"
import DummyChild from "./DummyChild"

const Dummy = () => {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState('')


    const expensiveCalculation = (num) =>{
        console.log('Running expensive calculation...')
        let result = 0
        for(let i=0; i< 10000000; i++)
        {
            result += i
        }
        return result + num
    }
    const calculateValue = useMemo(()=>{
        return expensiveCalculation(count)
    }, [count])

    const handleIncrement = useCallback(()=>{
        setCount(count+1)
    }, [count])
  return (
    <div>
        <h2>Learning useMemo and useCallback</h2>
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={handleIncrement}>Increment Count</button>
        </div>

        <div>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type something" />
            <p>Input: {input}</p>
        </div>
        <p>Calculated Value: {calculateValue}</p>
        <DummyChild onClickHandler={handleIncrement} />
      
    </div>
  )
}

export default Dummy
