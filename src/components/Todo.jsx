import React, {useEffect, useState} from 'react'

const Todo = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [userId, setUserId] = useState(1)
    const [postsLoading, setPostsLoading] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const controller = new AbortController()
        setIsLoading(true)
        setError(null)
        // console.log(retryCount)
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {signal: controller.signal})
        .then(res=>res.json())
        .then(data=>{
            setUser(data)
            setIsLoading(false)
        })
        .catch((err)=>{
            if(err.name !== 'AbortError')
            {
                setError('Failed to load user')
                setIsLoading(false)
            }

        })
        return () => controller.abort()
    },[userId])

    useEffect(()=>{
        const controller = new AbortController()
        setPostsLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`, {signal: controller.signal})
        .then(res=>res.json())
        .then(data=>{
            setPosts(data)
            setPostsLoading(false)
        })
        .catch(err=>{
            if(err.name !== 'AbortError')
            {
                setPostsLoading(false)
            }
        })
        return () => controller.abort()
    }, [userId])
    
  return (

    <div>
        {isLoading?<p>Loading...</p>:error?<p>{error}</p>:(
            <>
                <p>{user?.username}</p>
                <p>{user?.email}</p>
            </>
        )}
        <br />
        <br />
        <br />
        <button onClick={()=>setUserId(1)} className='bg-amber-200 px-2 rounded-2xl border-2 text-shadow-gray-50'>User 1</button>
        <button onClick={()=>setUserId(2)} className='bg-amber-200 px-2 rounded-2xl border-2 text-shadow-gray-50'>User 2</button>
        <button onClick={()=>setUserId(3)} className='bg-amber-200 px-2 rounded-2xl border-2 text-shadow-gray-50'>User 3</button>

        <div>
            <h3>Posts:</h3>
            {postsLoading? <p>Loading posts...</p>: posts.map(post=>
                <p key={post.id}>{post.title}</p>
            )}
        </div>
      
    </div>
  )
}

export default Todo
