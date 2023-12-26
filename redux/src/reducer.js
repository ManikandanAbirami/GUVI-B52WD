import { INCREASE_QUANTITY, DECREASE_QUANTITY, UPDATE_AMOUNT } from "./actions";

const initialState = {
  quantity: 1,
  amount: 0,
  unitPrice: 10,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return { ...state, quantity: state.quantity + 1 };
    case DECREASE_QUANTITY:
      return { ...state, quantity: state.quantity - 1 };
    case UPDATE_AMOUNT:
      return { ...state, amount: state.unitPrice * state.quantity };
    default:
      return state;
  }
}

export default rootReducer;
