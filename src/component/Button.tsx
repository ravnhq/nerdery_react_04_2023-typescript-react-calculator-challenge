import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

type Button = {
    name: string;
    orange?: boolean,
    wide?: boolean,
    clickHandler: (name : string) => void;
}

export const Button : React.FC<Button> = (props : Button) => {

  const handleClick = () => {
    props.clickHandler(props.name)
  }

    const className = [
      'component-button',
      props.orange ? 'orange' : '',
      props.wide ? 'wide' : '',
    ]

    return (
      <div className={className.join(' ').trim()}>
        <button onClick={handleClick}>{props.name}</button>
      </div>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    orange: PropTypes.bool.isRequired,
    wide: PropTypes.bool.isRequired,
    clickHandler: PropTypes.func.isRequired
  }