import React from 'react'

const Expression = () => {
    const obj = {
        name: 'Faustin',
        age: 28,
        student: true,
        program: 'IT'
    }
    const ageCal = (age) => age>18?"Adault":"Youngest"
  return (
    <div>
      <h1 className='text-5xl text-center text-amber-700'> Components learning</h1>
      <p className='text-2xl text-center'> Name: {obj.name} <br /> age: {obj.age} <br /> Education:{obj.student?"Student":"Not student"} <br /> Program: {obj.program}
      <br />
      Matual: {ageCal(19)}
      </p>
    </div>
  )
}

export default Expression
