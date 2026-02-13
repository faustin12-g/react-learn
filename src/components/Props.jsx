import React from 'react'

const Props = (props) => {
  return (
    <div>
      <h1 className='text-center'>
        This is the car. It has {props.color}, and it is of type {props.type}
      </h1>
    </div>
  )
}

export default Props
