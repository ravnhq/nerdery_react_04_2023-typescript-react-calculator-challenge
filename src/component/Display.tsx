import React from 'react'
import PropTypes from 'prop-types'

import './Display.css'

interface DisplayProps {
  value?: string;
}

export const Display : React.FC<DisplayProps> = ({ value }) => {
    return (
        <div className="component-display">
            <div>{value}</div>
        </div>
    )
}


Display.propTypes = {
  value: PropTypes.string
}
