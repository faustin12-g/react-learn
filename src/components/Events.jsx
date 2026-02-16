import React from 'react'

const Events = () => {
    const shoot = ()=>{
        return alert('Boom💥!!! I got you💨! I shut you🚀. You died💀')
    }
  return (
    <div className='justify-center text-center'>
        <a onClick={shoot}>Take me to the shoot</a>
    </div>
  )
}

export default Events
