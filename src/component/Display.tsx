import React from 'react'

import './Display.css'
interface DisplayProps {
  value: string
}
const Display = ({ value }: DisplayProps) => {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  )
}

export default Display
