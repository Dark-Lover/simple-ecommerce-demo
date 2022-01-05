import React from "react";
import { useSelector } from "react-redux";
import {
  TotalContainer,
  TotalWrapper,
  TotalInfos,
  TotalName,
  TotalPrice,
} from "./TotalStyles";

const Total = () => {
  const { cartItems } = useSelector((state) => state);
  let totalPrice = 0;

  if (cartItems.length !== 0) {
    totalPrice = cartItems.reduce(function (sum, item) {
      return (sum = sum + +item.price);
    }, 0);
  }

  return (
    <TotalContainer>
      <TotalWrapper>
        <TotalInfos>
          <TotalName>Total Price</TotalName>
          <TotalPrice>
            <span>{totalPrice} $</span>
          </TotalPrice>
        </TotalInfos>
      </TotalWrapper>
    </TotalContainer>
  );
};

export default Total;
