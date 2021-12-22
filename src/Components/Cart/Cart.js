import React from "react";
import styled from "styled-components";
import Article from "./ItemDetails/Article";

const CartPageContainer = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 1280px;
  margin: auto;
`;
const CartPageWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;
const CartHeading = styled.h1`
  display: block;
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem 2rem;
  color: #8e44ad;
  letter-spacing: 0.03rem;
  font-weight: 500;
  &::first-letter {
    text-transform: capitalize;
  }
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;
const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Cart = () => {
  return (
    <CartPageContainer>
      <CartPageWrapper>
        <CartHeading>My Cart</CartHeading>
        <Articles>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </Articles>
      </CartPageWrapper>
    </CartPageContainer>
  );
};

export default Cart;
