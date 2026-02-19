import React, { useState } from 'react'

const Forms = () => {
    let [name, setName]  = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('')
    let [mytext, setText] = useState('')
    let [year, setYear] = useState('2000')
    const validators = {
        name: v => v.trim().length >= 3? '' : 'Name must be at least 3 characters',
        email: v => /^\S+@\S+\.\S+$/.test(v)? '' : 'Enter a valid email address',
        password: v => v.length >=8 ? '': 'Password must be at least 8 characters long' 
    };
    const [errors, setErrors] = useState({
        name:'',
        email: '',
        password: ''
    })

    const [touched, setTouched] = useState({name:false, email: false, password:false})

    function handleSubmit(e)
    {
        e.preventDefault()

        const newErrors = {
            name: validators.name(name),
            email: validators.email(email),
            password: validators.password(password)
        }

        setErrors(newErrors)
        if(!newErrors.name&&!newErrors.email&&!newErrors.password)
        {
            alert(`Welcome back ${name}!!!`)
        }
        else{
            alert('OOPS! Your form seems to have errors. Please, correct error and try again')
        }
    }


  return (
    <div className='justify-center bg-white shadow-lg rounded-xl text-center max-w-md mx-auto p-6 sm:p-8'>
        <form onSubmit={handleSubmit} className='space-y-5'>
            <label htmlFor="" className='block text-sm font-medium text-gray-700 dark:text-gray-200'>Name</label>
            <input type='text' value={name} className='block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400' onChange={e=>setName(e.target.value)} placeholder='Your name'/>
            <label htmlFor="" className='block text-sm font-medium text-gray-700 dark:text-gray-200'>Email</label>
            <input typeof='email' value={email} className='block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400' onChange={e=>setEmail(e.target.value)} placeholder='Your email' />
            <label htmlFor="" className='block text-sm font-medium text-gray-700 dark:text-gray-200'>Password</label>
            <input type='password' value={password} className='block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400' onChange={e=> setPassword(e.target.value)} placeholder='Your strong password'/>
            <label htmlFor="" className='block text-sm font-medium text-gray-700 dark:text-gray-200'>Bio</label>
            <textarea value={mytext} onChange={e=>setText(e.target.value)} className='block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400' name="" id="" placeholder='Enter what you want people to know about you'></textarea>
            {/* <p>Your bio is currebtly: {mytext}</p> */}
            <label htmlFor="year" className='block text-sm font-medium text-gray-700 dark:text-gray-200'>Year of birth</label>
            <select
                name="year"
                id="year"
                value={year}
                onChange={e=>setYear(e.target.value)}
                className='block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400'
            >
                <option className='text-gray-500' value="" disabled>Select your year</option>
                <option className='text-gray-900' value="2000">2000</option>
                <option className='text-gray-900' value="2001">2001</option>
                <option className='text-gray-900' value="2002">2002</option>
                <option className='text-gray-900' value="2003">2003</option>
                <option className='text-gray-900' value="2004">2004</option>
                <option className='text-gray-900' value="2005">2005</option>
            </select>

            <button className='inline-flex items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-white font-medium hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'>Send</button>

        </form>
    </div>
  )
}

export default Forms
