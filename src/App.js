import React, { useState } from 'react'

import { Nui } from './nui/nui.component'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'
import Order from './components/Orders/Order'

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
  const [meals, setMeals] = useState([
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      category: 'choc',
      altPic:
        'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
      category: 'choc',
      altPic:
        'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      category: 'choc',
      altPic:
        'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      category: 'deden',
      altPic:
        'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
    },
    {
      id: 'm5',
      name: 'tas kebabi',
      description: 'Healthy...and green...',
      price: 18.99,
      category: 'choc',
      altPic:
        'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
    },
    {
      id: 'm6',
      name: 'kelle paca',
      description: 'Healthy...and green...',
      price: 18.99,
      category: 'baban',
      altPic:
        'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
    },
    {
      id: 'm7',
      name: 'tavuk izgara',
      description: 'Healthy...and green...',
      price: 18.99,
      category: 'cocuk',
      altPic:
        'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
    },
    {
      id: 'm8',
      name: 'corba',
      description: 'Healthy...and green...',
      price: 18.99,
      category: 'cocuk',
      altPic:
        'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
    },
  ])

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
      setMeals(event.data.meals)
      setCateg(event.data.category)
      setOrderIsShown(event.data.jobs) // boolean
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
  )
}

export default App
