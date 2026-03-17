import React, {useEffect, useState} from 'react'

const Todo = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>res.json())
        .then(data=>{
            setUser(data)
            setIsLoading(false)
        })
        .catch(()=>setError('Failed to load user'))
    },[])
    
  return (

    <div>
        {isLoading?<p>Loading...</p>:error?error:(user.username)}
      
    </div>
  )
}

export default Todo
