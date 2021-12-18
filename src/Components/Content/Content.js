import React from "react";
import Product from "./Product/Product";
import {
  ContentContainer,
  ContentWrapper,
  ContentHeading,
  Products,
} from "./ContentStyles";
import { useSelector } from "react-redux";
const Content = ({ location }) => {
  const data = useSelector((state) => state.allProducts);
  const heading = location ? location : "All Products";
  // const dataToShow =
  return (
    <ContentContainer>
      <ContentWrapper>
        <ContentHeading>{heading}</ContentHeading>
        <Products>
          {data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Products>
      </ContentWrapper>
    </ContentContainer>
  );
};

export default Content;
