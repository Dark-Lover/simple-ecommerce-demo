import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_PRODUCTS } from "./ItemTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};
export const fetchProducts = (products) => {
  return {
    type: FETCH_PRODUCTS,
    payload: products,
  };
};
