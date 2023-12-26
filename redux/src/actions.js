// Action Types
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const UPDATE_AMOUNT = "UPDATE_AMOUNT";

// Action Creators
export const increaseQuantity = () => ({ type: INCREASE_QUANTITY });
export const decreaseQuantity = () => ({ type: DECREASE_QUANTITY });
export const updateAmount = (amount) => ({
  type: UPDATE_AMOUNT,
  payload: amount,
});
