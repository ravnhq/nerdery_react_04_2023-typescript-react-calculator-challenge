import React, { useState } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'
import './App.css'

export type CalculateState = {
  total: string | null
  next: string | null
  operation: string | null
}

const App = () => {
  const [state, setState] = useState<CalculateState>({
    total: null,
    next: null,
    operation: null,
  })

  const handleClick = (buttonName: string) => {
    setState((prevState) => ({
      ...prevState,
      ...calculate(prevState, buttonName),
    }))
  }

  return (
    <div className="component-app">
      <Display value={state.next ?? state.total ?? '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}

export default App
