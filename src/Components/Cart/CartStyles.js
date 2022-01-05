import styled from "styled-components";

export const CartPageContainer = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 1280px;
  margin: auto;
`;
export const CartPageWrapper = styled.div`
  display: flex;
  flex-flow: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;
export const CartHeading = styled.h1`
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
export const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const EmptyCart = styled.div`
  display: block;
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem 2rem;
  color: #8e44ad;
  letter-spacing: 0.03rem;
  font-weight: 500;
  text-align: center;
  background-color: #ff7979;
  color: white;
  margin: auto;
`;
