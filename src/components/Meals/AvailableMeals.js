import { useEffect, useState } from 'react'

import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'
import Cart from '../Cart/Cart'

const allCateg = [
  { name: 'choc', id: 'ca1' },
  { name: 'anan', id: 'ca2' },
  { name: 'baban', id: 'ca3' },
  { name: 'deden', id: 'ca4' },
  { name: 'cocuk', id: 'ca5' },
]

const DUMMY_MEALS = [
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
]

const AvailableMeals = (props) => {
  const [currentMeals, setCurrentMeals] = useState(DUMMY_MEALS)
  const [suggestions, setSuggestions] = useState([])

  const [checked, setChecked] = useState([])

  const getMealsWithCategories = () => {
    if (checked.length === 0) {
      setCurrentMeals(DUMMY_MEALS)
      return
    }
    const newS = DUMMY_MEALS.filter((meal) =>
      checked.includes(meal.category)
    ).map((i) => {
      return {
        id: i.id,
        name: i.name,
        description: i.description,
        price: i.price,
        category: i.category,
        altPic: i.altPic,
      }
    })
    setCurrentMeals(newS)
  }
  useEffect(() => {
    getMealsWithCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked])

  const handleCheck = (event) => {
    var updatedList = [...checked]
    if (!checked.includes(event.target.name)) {
      updatedList = [...checked, event.target.name]
      setChecked(updatedList)
    } else {
      const indexOfEventTargetName = updatedList.indexOf(event.target.name)
      updatedList.splice(indexOfEventTargetName, 1)
      setChecked(updatedList)
    }
  }

  const addSugHandler = (item) => {
    const indexItem = DUMMY_MEALS.findIndex((object) => {
      return object.id === item.id
    })
    const newSuggestion = DUMMY_MEALS.filter((item) => {
      return (
        item.category === DUMMY_MEALS[indexItem].category &&
        item.name !== DUMMY_MEALS[indexItem].name
      )
    }).map((i) => {
      return {
        id: i.id,
        name: i.name,
        description: i.description,
        price: i.price,
        category: i.category,
        altPic: i.altPic,
      }
    })
    if (newSuggestion.length > 0) {
      setSuggestions(newSuggestion)
    } else {
      setSuggestions([])
    }
  }

  const categList = allCateg.map((name, index) => {
    return (
      <li key={index}>
        <input
          type="checkbox"
          onChange={handleCheck}
          id={`custom-checkbox-${index}`}
          name={name.name}
        />
        <label htmlFor={`custom-checkbox-${index}`}>{name.name}</label>
      </li>
    )
  })
  const mealsList = currentMeals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      imagesrc={meal.altPic}
      addSugHandler={addSugHandler}
    />
  ))

  return (
    <section className={classes.meals}>
      <Card className={classes.cardSection}>
        <div
          style={{ width: props.cartIsShown ? '60%' : '100%' }}
          className={classes.leftSection}
        >
          <div className={classes.filterSection}>
            {/* <div className={classes.inputText}>
              <label htmlFor="input_text_availablemeals">Arama</label>
              <input
                ref={searchInputRef}
                id="input_text_availablemeals"
                onChange={onChangeInput}
              />
            </div> */}
            <ul className={classes.altForm}>{categList}</ul>
          </div>
          <ul className={classes.mealsList}>{mealsList}</ul>
        </div>
        {props.cartIsShown && (
          <Cart
            suggestions={suggestions}
            className={classes.rightSection}
            onClose={props.onClose}
          />
        )}
      </Card>
    </section>
  )
}

export default AvailableMeals
