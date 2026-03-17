import React, {useEffect, useState} from 'react'

const Todo = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [retryCount, setRetryCount] = useState(0)

    useEffect(()=>{
        const controller = new AbortController()
        setIsLoading(true)
        setError(null)
        // console.log(retryCount)
        fetch('https://jsonplaceholder.typicode.com/users/1', {signal: controller.signal})
        .then(res=>res.json())
        .then(data=>{
            setUser(data)
            setIsLoading(false)
        })
        .catch(()=>{
            setError('Failed to load user')
            setIsLoading(false)
        })
        return () => controller.abort()
    },[retryCount])
    
  return (

    <div>
        {isLoading?<p>Loading...</p>:error?error:(user?.username)}
        <br />
        <br />
        <br />
        <button onClick={()=>setRetryCount(c=>c+1)} className='bg-amber-200 px-2 rounded-2xl border-2 text-shadow-gray-50'>Refresh</button>
      
    </div>
  )
}

export default Todo
