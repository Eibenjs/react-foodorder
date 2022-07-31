import React, { useState, useReducer } from 'react'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'
import Order from './components/Orders/Order'
import { Nui } from './nui/nui.component'

function Reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        cart: action.value,
      }
    default:
      return state
  }
}

function App() {
  const [hidden, setHidden] = useState(false)
  const [cartIsShown, setCartIsShown] = useState(false)
  const [orderIsShown, setOrderIsShown] = useState(false)
  const [categ, setCateg] = useState([
    { name: 'choc', id: 'ca1' },
    { name: 'anan', id: 'ca2' },
    { name: 'baban', id: 'ca3' },
    { name: 'deden', id: 'ca4' },
    { name: 'cocuk', id: 'ca5' },
  ])

  const [employe, setEmploye] = useState(false)

  const [state, dispatch] = useReducer(Reducer, {
    cart: [],
  })

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
      console.log(JSON.stringify(event.data.meals))
      console.log(JSON.stringify(event.data.category))

      dispatch({
        type: 'ADD_TO_CART',
        value: event.data.meals,
      })

      setCateg(event.data.category)
      setOrderIsShown(event.data.job) // boolean
      setEmploye(event.data.job) // boolean
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
    <div
      style={{
        display: hidden ? 'none' : 'block',
        width: '100%',
        height: '100%',
      }}
    >
      <CartProvider hidden={hidden}>
        <Header
          onShowOrder={toggleOrder}
          onShowCart={showCartHandler}
          employe={employe}
        />
        <main>
          {orderIsShown ? (
            <Order />
          ) : (
            <Meals
              category={categ}
              meals={state.cart}
              cartOnClose={hideCartHandler}
              cartIsShown={cartIsShown}
            />
          )}
        </main>
      </CartProvider>
    </div>
  )
}

export default App
