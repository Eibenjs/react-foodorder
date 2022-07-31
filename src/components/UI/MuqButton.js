import React from 'react'

import classes from './MuqButton.module.css'

const MuqButton = (props) => {
  const nonOfMyB = () => {}
  return (
    <button
      onClick={props.onClick ? props.onClick : nonOfMyB}
      data-icon={props.side}
      className={`${classes.button} ${props.className}`}
    >
      <span className={classes.span}>{props.name}</span>
    </button>
  )
}

export default MuqButton
