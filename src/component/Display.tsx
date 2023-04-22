import React from 'react'

import './Display.css'
import { DisplayProps } from './types'

export default function Display({ value }: DisplayProps) {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  )
}
