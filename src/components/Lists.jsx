import React from 'react'

const Lists = () => {
    const names = [
        {id: 1, name: 'Faustin'},
        {id:2, name: 'Karori'},
        {id:3, name: 'Manzi'}
    ]
  return (
    <div className='justify-center text-center'>
        <ul>
        {names.map(name=>(
            <div key={name.id}>
                <li>{name.name}</li>
            </div>
        ))}
        </ul>

    </div>
  )
}

export default Lists
