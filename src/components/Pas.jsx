import React, { useState } from 'react'

const Pas = () => {
    const [password, setPassword] = useState('')
    // const [email, setEmail] = useState('')
    const [show, setShow] = useState(false)
    const [len, setLen] = useState(false)

    function handleForm(e)
    {
        const value = e.target.value
        setPassword(value)
        if(value.length > 6)
        {
            setLen(true)

        }
        else{
            setLen(false)
        }
    }
  return (
    <div>
        <form action="">
            <h1>Account creation</h1>
            {/* <input type="email" placeholder='Inter your email'/> */}
            <br />
            <br />
            <br />
            <br />
            <input type={show?'text':'password'} value={password} onChange={handleForm} placeholder='Enter the strong password'/>
            <input type="checkbox" onChange={()=>setShow(!show)}/>
            <br />
            <p>{len ? 'Valid':'Invalid, length must be at least 6 characters'}</p>
            <button></button>
        </form>
    </div>
  )
}

export default Pas
