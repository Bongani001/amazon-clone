export const shoppingReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = state.basket;
      let itemBeingRemoved = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (state.basket.length > 0 && itemBeingRemoved) {
        newBasket = state.basket.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        console.warn(
          `Cannot remove (id: ${action.payload.id} as it is not in the basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
