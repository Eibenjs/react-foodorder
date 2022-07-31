import { useEffect, useState } from 'react'

import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'
import Cart from '../Cart/Cart'

const AvailableMeals = (props) => {
  const meals = props.meals
  // const [meals, setMeal] = useState([])
  const allCateg = props.category
  const [currentMeals, setCurrentMeals] = useState(meals)
  const [suggestions, setSuggestions] = useState([])


  const [checked, setChecked] = useState([])
  const getMealsWithCategories = () => {
    if (checked.length === 0) {
      setCurrentMeals(meals)
      return
    }
    const newS = meals.filter((meal) =>
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
    const indexItem = meals.findIndex((object) => {
      return object.id === item.id
    })
    const newSuggestion = meals.filter((item) => {
      return (
        item.category === meals[indexItem].category &&
        item.name !== meals[indexItem].name
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
