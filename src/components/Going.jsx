import React, { useState } from 'react'

const Going = () => {
    let [go, setGo] = useState(false)
    function changeMind()
    {
        setGo(prev => !prev)
    }
  return (
    <div>
       <h1 onClick={changeMind} className='cursor-pointer justify-center items-center min-h-[100vh]' aria-label={`${go?'Yes': 'No'}. Click to change the mind`}>{go?'Yes':'No'}</h1>
    </div>
  )
}

export default Going
