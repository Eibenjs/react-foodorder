import React, { useState } from 'react'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import HeaderSpecialButton from './HeaderSpecialButton'

const Header = (props) => {
  const [employe, setEmploye] = useState(true)

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1 className={classes.h1Sec}>Meals</h1>
        <div className={classes.rightSec}>
          {employe ? <HeaderSpecialButton onClick={props.onShowOrder} /> : ''}
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
