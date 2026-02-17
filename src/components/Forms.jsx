import React from 'react'

const Forms = () => {
    const [name, useState]  = ('');
    function handleSubmittion(e)
    {
        const typed = e.target.value
    }
  return (
    <div>
        <input value={name} onChange={handleSubmittion} className='p-6' placeholder='Type your name here' />
        <button className='bg-amber-500 p-5'>Submit a form</button>
    </div>
  )
}

export default Forms
