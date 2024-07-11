import React from 'react'
import './Button.css'

export type ClickHandlerFunction = (name: string) => void

type ButtonProps = {
  name: string
  orange?: boolean
  wide?: boolean
  clickHandler: ClickHandlerFunction
}

export default function Button({
  name,
  orange,
  wide,
  clickHandler,
}: ButtonProps) {
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
