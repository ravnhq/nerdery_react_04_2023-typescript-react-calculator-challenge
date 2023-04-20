import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
import { ButtonProps } from './types'

export default function Button({
  name,
  orange,
  wide,
  clickHandler,
}: ButtonProps) {
  const className = [
    'component-button',
    orange ? 'orange' : '',
    wide ? 'wide' : '',
  ]

  const handleClick = () => {
    clickHandler(name)
  }

  return (
    <div className={className.join(' ').trim()}>
      <button onClick={handleClick}>{name}</button>
    </div>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
}
