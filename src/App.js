import React, { useState } from 'react'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'
import Order from './components/Orders/Order'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const [orderIsShown, setOrderIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const toggleOrder = () => {
    if (orderIsShown) {
      setOrderIsShown(false)
    } else {
      setOrderIsShown(true)
    }
  }

  return (
    <CartProvider>
      <Header onShowOrder={toggleOrder} onShowCart={showCartHandler} />
      <main>
        {orderIsShown ? (
          <Order />
        ) : (
          <Meals cartOnClose={hideCartHandler} cartIsShown={cartIsShown} />
        )}
      </main>
    </CartProvider>
  )
}

export default App
