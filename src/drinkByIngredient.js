import React, { useContext, useState} from 'react';
import { Context } from './context';
import uuid from 'uuid/v1'

const DrinkByIngredient = () => {
    const { searchByIngredient, selectedIngredient, ingredientName } = useContext(Context);
    const [Display, setDisplay] = useState({show: false})
    const show = () => {setDisplay({show: true})}
    let display;
   const displayTrue = <ul className="DrinkSelected">{selectedIngredient.map((name)=>{
      return <li key={uuid()}>{name.strDrink} <img src={name.strDrinkThumb} height="100px" width="100px"alt=""></img></li>;
    })}</ul>

    Display.show ? display = displayTrue : display = <p></p>
    
    let previousIngredient = JSON.parse(localStorage.getItem('ingredientHistory') || '[]')
    let previousIngr = <ul>{previousIngredient.map((name)=>{
      return <li className="previousList" key={uuid()}>{name}</li>;
    })}</ul>
        return (
        <div className="Component">
          <h2>Look up drinks by Ingredients</h2>
            <input placeholder="Choose your Ingredient" onChange={ingredientName}></input>
            <button onClick={() => {searchByIngredient();show()}}>Select</button>
            {display}
            <div><span className="text">Previously chosen:</span> {previousIngr}</div>
        </div>
        )
    
}
export default DrinkByIngredient