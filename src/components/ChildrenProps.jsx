import React from 'react'

const ChildrenProps = (props) => {
  return (
    <div className='justify-center text-center'>
        <h1 className='text-5xl text-amber-300 font-extrabold'>This is the soem</h1>
        {props.children}
        
    </div>
  )
}

export default ChildrenProps
