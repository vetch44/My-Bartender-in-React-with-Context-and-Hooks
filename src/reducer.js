export const initialState = {drinksHad: 0};

const myReducer = (state, action) => {
  switch (action.type) {
    case 'clear':
      return { drinksHad: state.drinksHad = 0 };
    case 'addDrink':
      return { drinksHad: state.drinksHad + 1 };
    default:
      throw new Error();
  }
};

export default myReducer