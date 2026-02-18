import React, { useState } from 'react'

const Forms = () => {
    let [name, setName]  = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('')
    function handleSubmit(e)
    {
        e.preventDefault()
        alert('You have successfully submitted')
    }

  return (
    <div className='justify-center bg-white shadow-lg rounded-xl text-center max-w-md mx-auto p-6 sm:p-8'>
        <form onSubmit={handleSubmit} className='space-y-5'>
            <label htmlFor="" className='block text-sm font-medium text-gray-700 dark:text-gray-200'>Name</label>
            <input value={name} className='block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400' onChange={e=>setName(e.target.value)} placeholder='Your name'/>
            <label htmlFor="" className='block text-sm font-medium text-gray-700 dark:text-gray-200'>Email</label>
            <input value={email} className='block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400' onChange={e=>setEmail(e.target.value)} placeholder='Your email' />
            <label htmlFor="" className='block text-sm font-medium text-gray-700 dark:text-gray-200'>Password</label>
            <input value={password} className='block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400' onChange={e=> setPassword(e.target.value)} placeholder='Your strong password'/>
            <button className='inline-flex items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-white font-medium hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'>Send</button>
        </form>
    </div>
  )
}

export default Forms
