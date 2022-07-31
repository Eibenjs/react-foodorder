import React, { useState } from 'react'

import { Nui } from './nui/nui.component'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'
import Order from './components/Orders/Order'

function App() {
  const [hidden, setHidden] = useState(true)
  const [cartIsShown, setCartIsShown] = useState(false)
  const [orderIsShown, setOrderIsShown] = useState(false)

  const closePage = () => {
    setHidden(true)
    Nui.send('exit_focus', {}) // kapatma yollanilan
  }

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closePage()
    }
  })

  window.addEventListener('message', function (event) {
    const type = event.data.type

    if (type === 'SHOW_PAGE') {
      // acilirken yollanan
      setHidden(false)
    } else if (type === 'CLOSE_PAGE') {
      closePage()
    }
  })

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
    <>
      <CartProvider hidden={hidden}>
        <Header onShowOrder={toggleOrder} onShowCart={showCartHandler} />
        <main>
          {orderIsShown ? (
            <Order />
          ) : (
            <Meals cartOnClose={hideCartHandler} cartIsShown={cartIsShown} />
          )}
        </main>
      </CartProvider>
    </>
  )
}

export default App
