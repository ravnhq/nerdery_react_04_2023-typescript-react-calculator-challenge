import React, { useState } from 'react';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

interface AppState {
  total: string | null;
  next: string | null;
  operation: string | null;
}

export const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    total: null,
    next: null,
    operation: null,
  })

  const handleClick = (buttonName: string): void => {
    setState(prevState => calculate(prevState, buttonName));
  };

  return (
    <div className="component-app">
      <Display value={state.next ?? state.total ?? '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}

