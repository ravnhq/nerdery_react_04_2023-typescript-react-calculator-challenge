import React from 'react'
import './Button.css'

interface ButtonProps {
  name: string
  clickHandler: (name: string) => void
  orange?: boolean
  wide?: boolean
}
const Button = (props: ButtonProps) => {
  const { name, orange, wide, clickHandler } = props

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
