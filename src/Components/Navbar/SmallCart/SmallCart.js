import React from "react";
import { useSelector } from "react-redux";
import {
  SCartContainer,
  SCartWrapper,
  SCartNotif,
  SCartIcon,
} from "./SmallCartStyles";

const SmallCart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <SCartContainer>
      <SCartWrapper>
        <SCartNotif>{cartItems.length}</SCartNotif>
        <SCartIcon />
      </SCartWrapper>
    </SCartContainer>
  );
};

export default SmallCart;
