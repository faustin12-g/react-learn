import {useState, useEffect} from 'react'
import useFetch from './useFetch'

const ListTodos = () => {
    const [todos, setTodos] = useState([])
    const {data: todo, loading, error} = useFetch('https://jsonplaceholder.typicode.com/todos')

    useEffect(()=>{
        setTodos(todo)
    }, [todo])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>


return (
    <>
     {todos.map(item=>(
        <div key={item.id}>
            {item.title}

        </div>
     ))}

    </>
  )
}

export default ListTodos
