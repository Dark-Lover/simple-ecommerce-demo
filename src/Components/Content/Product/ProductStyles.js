import styled from "styled-components";

export const ProductContainer = styled.div`
  border-radius: 0.2rem;
  width: 280px;
  margin: 1rem;
  background-color: white;
  box-shadow: 0px 0px 25px 1px rgba(142, 68, 173, 0.37);
`;
export const ImgBox = styled.div`
  width: 100%;
  height: 145px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;
export const ProductImg = styled.img`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
  width: 100%;
  &:hover {
    width: 120%;
  }
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductInfos = styled.div`
  display: Flex;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
`;
export const ProductName = styled.h2`
  font-size: 1.15rem;
  color: #8e44ad;
  &::first-letter {
    text-transform: capitalize;
  }
`;
export const ProductPrice = styled.h2`
  font-size: 1.15rem;
  color: #8e44ad;
`;

export const AddToCart = styled.button`
  cursor: pointer;
  background-color: white;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.03rem;
  width: 60%;
  align-self: center;
  padding: 0.5rem;
  border: 2px solid #8e44ad;
  color: #8e44ad;
  margin: 0.5rem;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: #8e44ad;
    color: white;
  }
`;
export const RemoveFrCart = styled.button`
  cursor: pointer;
  background-color: #8e44ad;

  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.03rem;
  width: 60%;
  align-self: center;
  padding: 0.5rem;
  border: 2px solid #8e44ad;
  color: white;
  margin: 0.5rem;
  transition: all 0.25s ease-in-out;
`;
