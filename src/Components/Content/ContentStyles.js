import styled from "styled-components";

export const ContentContainer = styled.section`
  display: flex;
  flex-flow: column;
  max-width: 1280px;
  margin: auto;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;
export const ContentHeading = styled.h1`
  display: block;
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
export const Products = styled.div`
  width: 100%;
  /* background-color: #bb99dc; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
