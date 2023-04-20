import React from 'react'
import './index.css'

interface Props {
  value: string
}

const Display: React.FunctionComponent<Props> = ({ value }) => (
  <div className="component-display">
    <div>{value}</div>
  </div>
)

export default Display
