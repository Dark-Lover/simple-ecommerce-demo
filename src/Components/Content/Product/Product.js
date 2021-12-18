import React from "react";
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
        <AddToCart>Add To Cart</AddToCart>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Product;
