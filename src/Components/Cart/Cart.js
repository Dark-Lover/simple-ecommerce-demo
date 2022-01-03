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
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  console.log("cart page use selector: ", cartItems);
  return (
    <CartPageContainer>
      <CartPageWrapper>
        <CartHeading>My Cart</CartHeading>
        <Articles>
          {cartItems.length !== 0 ? (
            cartItems.map((el) => <Article data={el} key={el.id} />)
          ) : (
            <EmptyCart>Your Cart is Empty</EmptyCart>
          )}
        </Articles>
      </CartPageWrapper>
    </CartPageContainer>
  );
};

export default Cart;
