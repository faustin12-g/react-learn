import React from 'react'
import logo from '../assets/rosha.png'

const Rosha = () => {
  return (
    <header className='mx-auto max-w-3xl rounded-xl mt-6 border-2 border-purple-200 bg-white shadow-sm'>
        <div className='flex items-center justify-center py-4 relative'>
            <img src={logo} alt='Logo' className='h-20 rounded-full' />
        </div>
    </header>
  )
}

export default Rosha
