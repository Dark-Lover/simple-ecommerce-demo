import styled from "styled-components";

export const TotalContainer = styled.div`
  max-height: 150px;
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  margin: 0.5rem 2rem 1rem 2rem;
  background-color: white;
  box-shadow: 0px 0px 25px 1px rgba(142, 68, 173, 0.37);
  @media screen and (min-width: 768px) {
    /* margin: 0.5rem 2rem 0 0.5rem; */
    margin: 0.5rem 2rem 0rem 0rem;
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
`;

export const TotalInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  @media screen and (min-width: 768px) {
  }
`;
export const TotalName = styled.h3`
  color: #8e44ad;
  font-size: 1rem;
  display: block;
  &::first-letter {
    text-transform: capitalize;
  }
`;
export const TotalPrice = styled.p`
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    min-width: 90px;
  }
`;
