import React from 'react'

import AvailableMeals from './AvailableMeals'

const Meals = (props) => {
  return (
    <React.Fragment>
      <AvailableMeals
        cartIsShown={props.cartIsShown}
        onClose={props.cartOnClose}
      />
    </React.Fragment>
  )
}

export default Meals
