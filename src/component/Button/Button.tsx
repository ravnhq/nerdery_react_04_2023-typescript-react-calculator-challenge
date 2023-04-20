import React from 'react'

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

interface Props {
  name: string
  orange: boolean
  wide: boolean
  clickHandler: (str: string) => void
}

const Button: React.FunctionComponent<Props> = ({
  name,
  orange,
  wide,
  clickHandler,
}) => {
  const className = [
    'component-button',
    orange ? 'orange' : '',
    wide ? 'wide' : '',
  ]

  return (
    <div className={className.join(' ').trim()}>
      <button onClick={() => clickHandler()}>{name}</button>
    </div>
  )
}

export default Button
