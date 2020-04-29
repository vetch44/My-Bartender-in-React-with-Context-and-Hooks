import React, { useState} from 'react'

const AlcoholCalculator = () => {
    const [numberOfDrinks, setNewNumber]  = useState(0)
    const clear = () => {
        setNewNumber(0)
    }
    let noOfDrinks;
    if(numberOfDrinks>1){noOfDrinks = <span className="Drink">Don't Drive!!!</span>}
        return (
            <div className="Component">
                <h2>Drink Responsibly!!!</h2>
        <p>Amount of drinks consumed: {numberOfDrinks} <button onClick={clear} className="clear">Clear</button></p>
        <p>Amount of Alcohol in your blood: {numberOfDrinks * 0.14} ‰   {noOfDrinks}</p>
      <button onClick={() =>setNewNumber(numberOfDrinks + 1)}>Add New Drink</button>
      
            </div>
        )
    
}
export default AlcoholCalculator