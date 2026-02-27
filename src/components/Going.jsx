import React, { useState } from 'react'

const Going = () => {
    let [go, setGo] = useState('Yes')
  return (
    <div>
       <h1 onClick={go==='Yes'?()=>setGo('No'):()=>setGo('Yes')} className='cursor-pointer'>{go}</h1>
    </div>
  )
}

export default Going
