import React, { useReducer } from 'react'
import myReducer,{initialState} from './reducer'

const AlcoholCalculator = () => {

    const [state, dispatch] = useReducer(myReducer, initialState);
    let noOfDrinks;
    if(state.drinksHad>1){noOfDrinks = <span className="Drink">Don't Drive!!!</span>}

        return (
            <div className="Component">
                <h2>Drink Responsibly!!!</h2>
        <p>Amount of drinks consumed: {state.drinksHad} <button onClick={() => {
    dispatch({ type: 'clear' })}} className="clear">Clear</button></p>
        <p>Amount of Alcohol in your blood: {state.drinksHad * 0.14} ‰   {noOfDrinks}</p>
      <button onClick={() => {
    dispatch({ type: 'addDrink' })}}>Add New Drink</button>
            </div>
        )
    
}
export default AlcoholCalculator