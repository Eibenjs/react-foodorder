import { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 50
    ) {
      setAmountIsValid(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        width="3rem"
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '50',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Gecerli bir sayi gir</p>}
    </form>
  )
}

export default MealItemForm
