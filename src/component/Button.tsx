import React, { FC } from 'react'
//import PropTypes from 'prop-types'
import './Button.css'
export interface Button {
  name: string
  orange?: boolean
  wide?: boolean
  clickHandler: (name: string) => void
}
// export default class Button extends React.Component {
//   static propTypes = {
//     name: PropTypes.string,
//     orange: PropTypes.bool,
//     wide: PropTypes.bool,
//     clickHandler: PropTypes.func,
//   }

//   handleClick = () => {
//     this.props.clickHandler(this.props.name)
//   }

//   render() {
//     const className = [
//       'component-button',
//       this.props.orange ? 'orange' : '',
//       this.props.wide ? 'wide' : '',
//     ]

//     return (
//       <div className={className.join(' ').trim()}>
//         <button onClick={this.handleClick}>{this.props.name}</button>
//       </div>
//     )
//   }
// }

const Button: FC<Button> = ({ name, orange, wide, clickHandler }) => {
  const handleClick = () => {
    clickHandler(name)
  }
  const className = [
    'component-button',
    orange ? 'orange' : '',
    wide ? 'wide' : '',
  ]

  return (
    <div className={className.join(' ').trim()}>
      <button onClick={handleClick}>{name}</button>
    </div>
  )
}

export default Button
