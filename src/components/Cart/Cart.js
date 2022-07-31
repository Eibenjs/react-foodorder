/* eslint-disable jsx-a11y/alt-text */
import { useContext, useState, useEffect } from 'react'

import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'

import CartItem from './CartItem'
import classes from './Cart.module.css'
import './Cart.css'
import CartContext from '../../store/cart-context'

const Cart = (props) => {
  const [sugActive, setSugActive] = useState(false)
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  useEffect(() => {
    if (props.suggestions.length === 0) {
      setSugActive(false)
    } else {
      setSugActive(true)
    }
  }, [props.suggestions])

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const onOrder = () => {
    // Order butonuna tiklandiginda siparis listesi consolda su an
    console.log(cartCtx.items)
  }

  const cartItems = (
    <ul
      className={classes['cart-items']}
      style={{ height: sugActive ? '70.5%' : '85.5%' }}
    >
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  return (
    <div className={`${classes['main-div']} ${props.className}`}>
      {cartItems}
      {sugActive ? (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={classes.swiper}
        >
          {props.suggestions.map((sug) => {
            return (
              <SwiperSlide className={classes.sug} key={sug.id}>
                <div className={classes.sugLeft}>
                  <img src={sug.altPic} />
                  <div className={classes.sugLeftTexts}>
                    <div>
                      <div className={classes.sugLeftName}>{sug.name}</div>
                      <div className={classes.sugLeftDesc}>
                        {sug.description}
                      </div>
                    </div>
                    <div className={classes.sugLeftPrice}>
                      <div>${sug.price}</div>
                      <button
                        onClick={cartItemAddHandler.bind(null, sug)}
                        className={classes.sugButton}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      ) : (
        ''
      )}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button onClick={onOrder} className={classes.button}>
            Order
          </button>
        )}
      </div>
    </div>
  )
}

export default Cart
