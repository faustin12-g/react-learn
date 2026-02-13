import React from 'react'
import Expression from './components/Expression'
import Props from './components/Props'
import Component from './components/Component'
import Car from './components/Car'

const App = () => {
  return (
      < >
        < Expression />
        <Props color='White' type='Benz' />
        <Component />
        <Car type='V8' year='2021' color='Black' />
        <Car type='Lamb' year='2011' color='Gray' />
        <Car type='Benz' year='2018' color='White' />

      </>
  )
}

export default App
