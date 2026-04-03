import React from 'react'
import Dummy from './dummy'

const DummyChild = ({onClickHandler}) => {
    console.log('ChildButton Rendered')
  return (
    <button onClick={onClickHandler}>Child Increment Button</button>
  )
}

export default React.memo(DummyChild)
