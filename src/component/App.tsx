import React, { useState } from 'react';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

export type Operation ={
  total?: string | null | undefined,
  next?: string | null | undefined,
  operation?: string | null
}

const App: React.FC = () => {
  const [state, setState] = useState<Operation>({
    total: null,
    next: null,
    operation: null
  })

  const handleClick = (buttonName : string) => {
    setState(prevState => {
      const newState = calculate(prevState, buttonName);
      return Object.assign({}, prevState, newState);
    });
  }

  return (
    <div className="component-app">
      <Display value={state.next ?? state.total ?? '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}

export default App