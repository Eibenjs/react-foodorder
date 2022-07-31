import React from 'react'

import Card from '../UI/Card'
import classes from './Order.module.css'
import OrderItem from './OrderItem'

const DUMMY_ORDERS = [
  {
    id: '123456',
    orderOwner: 'yavzu',
    orders: [
      {
        name: 'tas kebabi',
        amount: '2',
        price: '18.99',
        altPic:
          'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000',
      },
      {
        name: 'Sushi',
        amount: '1',
        price: '22.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'tavuk izgara',
        amount: '10',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'corba',
        amount: '1',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'tavuk izgara',
        amount: '10',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'corba',
        amount: '1',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
    ],
  },
  {
    id: '321451',
    orderOwner: 'eminadam',
    orders: [
      {
        name: 'tavuk izgara',
        amount: '10',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'corba',
        amount: '1',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
    ],
  },
  {
    id: '421312',
    orderOwner: 'whiteattackalp',
    orders: [
      {
        name: 'tavuk izgara',
        amount: '10',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'corba',
        amount: '1',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
    ],
  },
  {
    id: '456789',
    orderOwner: 'pttfixfqx',
    orders: [
      {
        name: 'tavuk izgara',
        amount: '10',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'corba',
        amount: '1',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'tavuk izgara',
        amount: '10',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'corba',
        amount: '1',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'tavuk izgara',
        amount: '10',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'corba',
        amount: '1',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
    ],
  },
  {
    id: '897895',
    orderOwner: 'kralattack',
    orders: [
      {
        name: 'tavuk izgara',
        amount: '10',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'corba',
        amount: '1',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'tavuk izgara',
        amount: '10',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'corba',
        amount: '1',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'tavuk izgara',
        amount: '10',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
      {
        name: 'corba',
        amount: '1',
        price: '18.99',
        altPic:
          'https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png',
      },
    ],
  },
]

const middleIndex = Math.ceil(DUMMY_ORDERS.length / 2)

const First = DUMMY_ORDERS.splice(0, middleIndex)
const Second = DUMMY_ORDERS.splice(-middleIndex)

const Order = (props) => {
  return (
    <section className={classes.orderMain}>
      <Card
        style={{
          height: '100%',
          display: 'flex',
          overflow: 'auto',
        }}
      >
        <div className={classes.firstDiv}>
          {First.map((item) => {
            return <OrderItem key={item.id} item={item} />
          })}
        </div>
        <div className={classes.secondDiv}>
          {Second.map((item) => {
            return <OrderItem key={item.id} item={item} />
          })}
        </div>
      </Card>
    </section>
  )
}

export default Order
