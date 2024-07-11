import React from 'react'

import './Display.css'

type DisplayProps = {
  value: string
}

export default function Display({ value }: DisplayProps) {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  )
}
