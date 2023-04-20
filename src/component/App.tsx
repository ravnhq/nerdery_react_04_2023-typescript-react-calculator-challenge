import React from 'react'
import { Display } from './Display'
import { ButtonPanel } from './ButtonPanel'
import calculate from '../logic/calculate'
import './App.css'
import { CalculatorData } from '../interfaces'

const initialCalculatorData: CalculatorData = {
  total: null,
  next: null,
  operation: null,
}

const App: React.FunctionComponent = () => {
  const [state, setState] = React.useState<CalculatorData>(
    initialCalculatorData,
  )

  const handleClick = (buttonName: string) => {
    const newState = calculate(state, buttonName)
    setState(newState as CalculatorData)
  }

  return (
    <div className="component-app">
      <Display value={state.next ?? state.total ?? '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}

export default App
