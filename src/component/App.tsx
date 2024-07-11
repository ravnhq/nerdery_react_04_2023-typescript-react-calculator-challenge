import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import { calculate, CalculatorData } from '../logic/calculate'
import './App.css'

export default function App() {
  const [state, setState] = React.useState<CalculatorData>({
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
