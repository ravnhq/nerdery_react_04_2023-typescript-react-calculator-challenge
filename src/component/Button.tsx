import React from 'react'
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
