import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../Redux";
import {
  ProductContainer,
  ProductWrapper,
  ProductImg,
  ProductInfos,
  ProductName,
  ProductPrice,
  AddToCart,
  ImgBox,
  RemoveFrCart,
} from "./ProductStyles";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const show = cartItems.includes(product);
  return (
    <ProductContainer>
      <ProductWrapper>
        <ImgBox>
          <ProductImg src={product.img} />
        </ImgBox>
        <ProductInfos>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price}$</ProductPrice>
        </ProductInfos>
        {show ? (
          <RemoveFrCart onClick={() => dispatch(removeFromCart(product))}>
            Remove From Cart
          </RemoveFrCart>
        ) : (
          <AddToCart onClick={() => dispatch(addToCart(product))}>
            Add To Cart
          </AddToCart>
        )}
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Product;
