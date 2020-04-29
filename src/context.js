import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
  const [drinkName, setDrinkName] = useState("")
  const [nameOfIngredient, setIngredientName] = useState("")

  const [drinkByName, setDrinkByName] = useState({Instructions: "Choose a drink first",
    Ingredients: ["First Ingredient", "Second Ingredient", "Third Ingredient"],
  Name: "Choose your first drink",
  Show: false});
  const [selectedIngredient, setIngredient] = useState([{strDrink: "nameOfDrink"}]);

  const selectDrinkName = (e) => {setDrinkName(`${e.target.value}`)}
  const ingredientName = (e) => {setIngredientName(`${e.target.value}`)}

  const Random = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php` )
                .then(res => res.json())
                .then(data => setDrinkByName({Instructions: data.drinks[0].strInstructions,
                Ingredients: [data.drinks[0].strIngredient1, data.drinks[0].strIngredient2, data.drinks[0].strIngredient3],
              Name: data.drinks[0].strDrink,
              Image: data.drinks[0].strDrinkThumb,
            Show: true}))  
  }
  const searchByName = () => {
      const maxHistory = 3;
      const history = JSON.parse(localStorage.getItem('drinkHistory') || '[]');
      const historySize = history.length === maxHistory;
      const currentHistory = historySize ? history.slice(1) : history;
      const newHistory = currentHistory.concat(drinkName);
    
    localStorage.setItem('drinkHistory', JSON.stringify(newHistory));
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}` )
                .then(res => res.json())
                .then(data => setDrinkByName({Instructions: data.drinks[0].strInstructions,
                Ingredients: [data.drinks[0].strIngredient1, data.drinks[0].strIngredient2, data.drinks[0].strIngredient3],
              Name: data.drinks[0].strDrink,
              Image: data.drinks[0].strDrinkThumb,
              Show: true
            }))
}
const searchByIngredient = () => {
  const maxHistory = 3;
      const history = JSON.parse(localStorage.getItem('ingredientHistory') || '[]');
      const historySize = history.length === maxHistory;
      const currentHistory = historySize ? history.slice(1) : history;
      const newHistory = currentHistory.concat(nameOfIngredient);
    
    localStorage.setItem('ingredientHistory', JSON.stringify(newHistory));
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nameOfIngredient}` )
          .then(res => res.json())
          .then(data => setIngredient(data.drinks))
}
  return (
    <Context.Provider  value={{
      Random, drinkByName, selectDrinkName, searchByName, searchByIngredient, ingredientName, selectedIngredient
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;