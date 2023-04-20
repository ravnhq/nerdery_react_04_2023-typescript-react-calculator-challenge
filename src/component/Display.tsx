import React from 'react'
import './Display.css'

export const Display: React.FC<CalculatorDisplayProps> = ({
  value,
}: CalculatorDisplayProps) => {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  )
}
