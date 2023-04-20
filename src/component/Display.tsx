import React from 'react'
import PropTypes from 'prop-types'

import './Display.css'
import { DisplayProps } from './types'

// export default class Display extends React.Component {
//   static propTypes = {
//     value: PropTypes.string,
//   }

//   render() {
//     return (
//       <div className="component-display">
//         <div>{this.props.value}</div>
//       </div>
//     )
//   }
// }

export default function Display({ value }: DisplayProps) {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  )
}

Display.propTypes = {
  value: PropTypes.string,
}
