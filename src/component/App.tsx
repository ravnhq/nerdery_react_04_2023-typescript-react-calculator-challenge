import React, { useState } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'
import './App.css'

// export default class App extends React.Component {
//   state = {
//     total: null,
//     next: null,
//     // eslint-disable-next-line react/no-unused-state
//     operation: null,
//   }

//   handleClick = (buttonName) => {
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

export interface myState {
  total: null | string
  next: null | string
  operation: null | string
}
const App = () => {
  const [mystate, setMyState] = useState<myState>({
    total: null,
    next: null,
    operation: null,
  })
  // const handleClick = (buttonName) => {
  //   setState((prevState) => {
  //     console.log(calculate(prevState, buttonName), prevState, 'calculate')
  //     return calculate(prevState, buttonName), prevState
  //   })
  // }
  const handleClick = (buttonName: string) => {
    const mycalculate = { ...mystate, ...calculate(mystate, buttonName) }
    setMyState(mycalculate)
    //setMyState((prevState) => calculate(prevState, buttonName))
  }
  return (
    <div className="component-app">
      <Display value={mystate.next ?? mystate.total ?? '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}

export default App
