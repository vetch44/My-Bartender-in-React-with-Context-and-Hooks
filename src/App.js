import React, {useState} from 'react';
import './App.css';
import DrinkByName from  './drinkByName'
import AlcoholCalculator from './alcoholCalculator'
import DrinkByIngredient from './drinkByIngredient'
import ContextProvider from "./context"

const App = () => {
 
const [firstComponent, setFirst] = useState(true)
const [secondComponent, setSecond] = useState(true)
const [thirdComponent, setThird] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Bartender</h1>
  <ul className="NavBar">
    <li onClick={() => setFirst(!firstComponent)}>Search by Name</li>
    <li onClick={() => setSecond(!secondComponent)}>Search by Ingredient</li>
    <li onClick={() => setThird(!thirdComponent)}>Can I drive?</li>
  </ul></header>
  <div className="content">
  <ContextProvider>
      {!firstComponent &&<DrinkByName />}
      {!secondComponent&&<DrinkByIngredient/>}
      {!thirdComponent&&<AlcoholCalculator/>}
  </ContextProvider>
  </div>
  <footer>Created by Adam in 2020</footer>
    </div>
  );
}

export default App;
