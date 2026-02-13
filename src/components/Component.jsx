import React from 'react'

const Car = (props) => {
    return (
        <div>
            The car here is the model of {props.model} and it is of the year of {props.year}
        </div>
    )
}

const Component = () => {
  return (
    <div className='justify-center text-center'>
        <h1>This is to check if this function can contain an other function</h1>
        <Car model = 'Lambogini' year = '2022' />
    </div>
  )
}

export default Component
