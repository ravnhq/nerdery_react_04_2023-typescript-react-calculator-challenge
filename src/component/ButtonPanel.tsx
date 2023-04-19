import { Button } from './Button'
import React from 'react'
import PropTypes from 'prop-types'

import './ButtonPanel.css'

interface Props {
  clickHandler: (buttonName: string) => void
}

export const ButtonPanel : React.FC<Props> = ({clickHandler}) => {

    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={clickHandler} orange />
          <Button name="+/-" clickHandler={clickHandler} />
          <Button name="%" clickHandler={clickHandler} />
          <Button name="÷" clickHandler={clickHandler} orange />
        </div>
        <div>
          <Button name="7" clickHandler={clickHandler} />
          <Button name="8" clickHandler={clickHandler} />
          <Button name="9" clickHandler={clickHandler} />
          <Button name="x" clickHandler={clickHandler} orange />
        </div>
        <div>
          <Button name="4" clickHandler={clickHandler} />
          <Button name="5" clickHandler={clickHandler} />
          <Button name="6" clickHandler={clickHandler} />
          <Button name="-" clickHandler={clickHandler} orange />
        </div>
        <div>
          <Button name="1" clickHandler={clickHandler} />
          <Button name="2" clickHandler={clickHandler} />
          <Button name="3" clickHandler={clickHandler} />
          <Button name="+" clickHandler={clickHandler} orange />
        </div>
        <div>
          <Button name="0" clickHandler={clickHandler} wide />
          <Button name="." clickHandler={clickHandler} />
          <Button name="=" clickHandler={clickHandler} orange />
        </div>
      </div>
    )
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
}