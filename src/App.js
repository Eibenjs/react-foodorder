import React, { useState } from 'react'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'
import Order from './components/Orders/Order'
import { Nui } from './nui/nui.component'

function App() {
<<<<<<< HEAD
=======
  const [hidden, setHidden] = useState(false)
>>>>>>> 3edf5c3252b0d76c14190a2d44b2fd9a7bf3b716
  const [cartIsShown, setCartIsShown] = useState(false)
  const [orderIsShown, setOrderIsShown] = useState(false)

<<<<<<< HEAD
=======
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
      console.log('meals ' + event.data.meals)
      console.log('categ ' + event.data.category)
      setMeals(event.data.meals)
      setCateg(event.data.category)
      setOrderIsShown(event.data.jobs) // boolean
      setHidden(false)
    } else if (type === 'CLOSE_PAGE') {
      closePage()
    }
  })

>>>>>>> 3edf5c3252b0d76c14190a2d44b2fd9a7bf3b716
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
<<<<<<< HEAD
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
=======
    <div
      style={{
        display: hidden ? 'none' : 'block',
        width: '100%',
        height: '100%',
      }}
    >
      <CartProvider hidden={hidden}>
        <Header onShowOrder={toggleOrder} onShowCart={showCartHandler} />
        <main>
          {orderIsShown ? (
            <Order />
          ) : (
            <Meals
              category={categ}
              meals={meals}
              cartOnClose={hideCartHandler}
              cartIsShown={cartIsShown}
            />
          )}
        </main>
      </CartProvider>
    </div>
>>>>>>> 3edf5c3252b0d76c14190a2d44b2fd9a7bf3b716
  )
}

export default App
