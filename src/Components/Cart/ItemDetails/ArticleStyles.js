import styled from "styled-components";

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 0.2rem;
  width: 100%;
  margin: 0.5rem 2rem;
  background-color: white;
  box-shadow: 0px 0px 25px 1px rgba(142, 68, 173, 0.37);
  @media screen and (min-width: 768px) {
    width: 100%;
    justify-content: start;
  }
`;

export const ArticleWrapper = styled.div`
  display: flex;
`;
export const ImgBox = styled.div`
  width: 120px;
  height: 90px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;
export const ArticleImg = styled.img`
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

export const ArticleInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ArticleName = styled.h3`
  color: #8e44ad;
  font-size: 1rem;
  display: block;
  &::first-letter {
    text-transform: capitalize;
  }
`;
export const ArticlePrice = styled.p`
  font-weight: 500;
  @media screen and (min-width: 768px) {
    min-width: 90px;
  }
`;

export const ArticleDesc = styled.p`
  display: block;
  font-weight: 500;
  text-align: center;
  &::first-letter {
    text-transform: capitalize;
  }
  @media screen and (min-width: 768px) {
    min-width: 90px;
  }
`;
// export const ArticleQty = styled.div`
//   display: flex;
//   justify-content: center;
//   font-weight: 500;
// `;
// export const QtyInput = styled.input`
//   width: 40px;
//   margin-left: 0.5rem;
//   text-align: center;
//   width: 3rem;
//   outline: none;
//   &::-webkit-inner-spin-button {
//     opacity: 1;
//   }
// `;
export const Total = styled.div`
  font-weight: 500;
  @media screen and (min-width: 768px) {
    min-width: 85px;
  }
`;
export const RemoveItem = styled.div`
  cursor: pointer;
  background-color: red;
  width: 1.5rem;
  height: 1.2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
