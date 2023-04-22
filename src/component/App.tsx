import React, { useState } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'
import './App.css'
import { AppState, ClickHandlerFunction } from './types'

export default function App() {
  const [state, setState] = useState<AppState>({
    total: null,
    next: null,
    operation: null,
  })

  const handleClick: ClickHandlerFunction = (buttonName) => {
    const newState = calculate(state, buttonName)

    setState({ ...state, ...newState } as AppState)
  }

  return (
    <div className="component-app">
      <Display value={state.next ?? state.total ?? '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}
