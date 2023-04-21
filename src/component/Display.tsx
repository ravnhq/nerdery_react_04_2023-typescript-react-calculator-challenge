import React, { FC } from 'react'
import './Display.css'
export interface Display {
  value: string
}

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

const Display: FC<Display> = ({ value }) => {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  )
}

export default Display
