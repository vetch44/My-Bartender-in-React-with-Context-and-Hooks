import React, { useContext} from 'react'
import { Context } from './context';
import uuid from 'uuid/v1'

const DrinkByName = () => {
    const { drinkByName, Random, selectDrinkName, searchByName } = useContext(Context);
    let drinkResult;
    const drinkResultTrue = <div><img src={`${drinkByName.Image}`} width="15%" height="18%" alt=""></img>
    <p> {drinkByName.Name}</p>
    <ul className="DrinkChosen"><p>Ingredients:</p>
            <li>{drinkByName.Ingredients[0]}</li>
            <li>{drinkByName.Ingredients[1]}</li>
            <li>{drinkByName.Ingredients[2]}</li>
            </ul>
        <p>Instructions: {drinkByName.Instructions}</p></div>
    const drinkResultFalse = <p></p>
    drinkByName.Show ? drinkResult = drinkResultTrue : drinkResult = drinkResultFalse
    
        let previousDrink = JSON.parse(localStorage.getItem('drinkHistory') || '[]')
        let lastDrink = <ul>{previousDrink.map((name)=>{
      return <li key={uuid()} className="previousList">{name}</li>;
    })}</ul>
        return (
            <div className="Component">
                <h2>Search your Drinks by Name</h2>
                <input placeholder="Enter the name of your drink" onChange={selectDrinkName}></input>
                <button onClick={searchByName}>Choose</button>
                    {drinkResult}
            <button onClick={Random}>Choose Random</button>
        <div className="previous"><span className="text">Previously chosen:</span> {lastDrink}</div>
            </div>
        )
    
}
export default DrinkByName