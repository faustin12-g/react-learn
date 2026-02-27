import { useState } from "react"

const Count = () => {

  let [count, setCount] = useState(0)

  function Descrease(e)
  {
    e.preventDefault()
    count--
    setCount(count)
  }
  function Increase(e)
  {
    e.preventDefault()
    count++
    setCount(count)
  }

  return (
    <div className='flex justify-center items-center min-h-[100vh] gap-6'>
        <button onClick={Descrease} className='cursor-pointer bg-black text-amber-50 p-2 rounded-2xl border-2 border-amber-400'>Descrease</button>
        <h1 className='text-4xl'>{count}</h1>
        <button onClick={Increase} className='cursor-pointer bg-blue-800 text-amber-50 p-2 rounded-2xl border-2 border-amber-400'>Increate</button>
    </div>
  )
}

export default Count
