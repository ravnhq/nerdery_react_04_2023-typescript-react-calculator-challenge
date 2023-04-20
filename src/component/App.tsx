import React, { useState } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'
import './App.css'
import { AppState, clickHandlerFunction } from './types'

// export default class App extends React.Component {
//   state = {
//     total: null,
//     next: null,
//     // eslint-disable-next-line react/no-unused-state
//     operation: null,
//   }

//   handleClick = (buttonName) => {
//     console.log(this.state)
//     this.setState((prevState) => calculate(prevState, buttonName))
//   }

//   render() {
//     return (
//       <div className="component-app">
//         <Display value={this.state.next || this.state.total || '0'} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </div>
//     )
//   }
// }

export default function App() {
  const [ownState, setOwnState] = useState<AppState>({
    total: null,
    next: null,
    operation: null,
  })

  const handleClick: clickHandlerFunction = (buttonName) => {
    const newState = calculate(ownState, buttonName)

    setOwnState({ ...ownState, ...newState } as AppState)
  }

  return (
    <div className="component-app">
      <Display value={ownState.next ?? ownState.total ?? '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}
