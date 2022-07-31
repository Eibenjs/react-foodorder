import CartIcon from '../Cart/CartIcon'
import classes from './HeaderSpecialButton.module.css'

const HeaderCartButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Orders</span>
    </button>
  )
}

export default HeaderCartButton
