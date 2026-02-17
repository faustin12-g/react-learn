import React, { useState } from 'react'

const Forms = () => {
    let [name, setName]  = useState('');
    function handleChange(e)
    {
        setName(e.target.value)
    }
    function handleSubmit(e)
    {
        e.preventDefault()
        alert(name)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={handleChange} className='p-6' placeholder='Type your name here' />
            <button className='bg-amber-500 p-5'>Submit a form</button>
        </form>
    </div>
  )
}

export default Forms
