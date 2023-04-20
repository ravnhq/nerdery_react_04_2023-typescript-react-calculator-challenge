import React from 'react'
import './index.css'

interface Props {
  name: string
  orange?: boolean
  wide?: boolean
  clickHandler: () => void
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
