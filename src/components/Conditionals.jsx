import React from 'react'

const Conditionals = (pros) => {
  return (
    <div className='justify-center text-center'>
        {pros.brand && <h1>{pros.brand}</h1>}
    </div>
  )
}

export default Conditionals
