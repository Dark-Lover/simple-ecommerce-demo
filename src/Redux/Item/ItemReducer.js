import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_PRODUCTS } from "./ItemTypes";

const initialState = {
  allProducts: [],
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        allProducts: [...action.payload],
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((el) => el.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
