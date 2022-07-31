/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import classes from './OrderItem.module.css'

const OrderItem = (props) => {
  let totalMoneyX = 0

  props.item.orders.forEach((orderMoney) => {
    let forNow = orderMoney.amount * orderMoney.price
    totalMoneyX += forNow
  })

  let totalMoney = totalMoneyX.toFixed(2)

  const deleteOrder = () => {
    console.log(props.item.id + ' silindi')
  }

  const orderSucceded = () => {
    console.log(props.item.id + ' teslim edildi')
  }

  return (
    <>
      <Accordion className={classes.orderItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Siparis Numarasi: {props.item.id}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.typo} component={'div'}>
            <div className={classes.typoLeft}>
              <div className={classes.typoLeftOrderOwner}>
                Siparis Veren:
                <span> {props.item.orderOwner}</span>
              </div>
              <div className={classes.typoLeftMeal}>
                <div className={classes.typoLeftMealIn}>
                  {props.item.orders.map((meal) => {
                    return (
                      <div
                        className={classes.typoLeftMealImDiv}
                        key={Math.random()}
                      >
                        <img src={meal.altPic}></img>
                        <div className={classes.typeLeftMealDet}>
                          <div>
                            <span className={classes.typeLeftMealDetB}>
                              {meal.name}
                            </span>
                            <span>Adet: {meal.amount}</span>
                          </div>
                          <span className={classes.typeLeftMealDetP}>
                            ${meal.price}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className={classes.typoRight}>
              <div className={classes.typoRightTotal}>
                Total: <span>${totalMoney}</span>
              </div>
              <div className={classes.typoRightButton}>
                <button
                  style={{ backgroundColor: '#424242' }}
                  onClick={orderSucceded}
                >
                  Teslim Edldi
                </button>
                <button onClick={deleteOrder}>Iptal Et</button>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default OrderItem
