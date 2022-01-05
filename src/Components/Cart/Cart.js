import React from "react";
import Article from "./ItemDetails/Article";
import { useSelector } from "react-redux";
import {
  CartPageContainer,
  CartPageWrapper,
  CartHeading,
  Articles,
  EmptyCart,
} from "./CartStyles";
import Total from "../Total/Total";
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <CartPageContainer>
      <CartHeading>My Cart</CartHeading>
      <CartPageWrapper>
        <Articles>
          {cartItems.length !== 0 ? (
            cartItems.map((el) => <Article data={el} key={el.id} />)
          ) : (
            <EmptyCart>Your Cart is Empty</EmptyCart>
          )}
        </Articles>
        {cartItems.length !== 0 ? <Total /> : ""}
      </CartPageWrapper>
    </CartPageContainer>
  );
};

export default Cart;
