import React from 'react'

const Car = (props) => {
  return (
    <div className='justify-center text-center'>
        <h1>This one if for checking if the props can be rendered respecting how it was called. This is how it works:
            {props.color} {props.type} {props.year}
        </h1>
    </div>
  )
}

export default Car
