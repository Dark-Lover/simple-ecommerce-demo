import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux";
import {
  ProductContainer,
  ProductWrapper,
  ProductImg,
  ProductInfos,
  ProductName,
  ProductPrice,
  AddToCart,
  ImgBox,
} from "./ProductStyles";
const Product = ({ product }) => {
  const dispatch = useDispatch();
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
        <AddToCart onClick={() => dispatch(addToCart(product))}>
          Add To Cart
        </AddToCart>
        {/* ADD TO CART || ALREADY ADDED */}
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Product;
