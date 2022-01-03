import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 0.2rem;
  width: 100%;
  margin: 0.5rem 2rem;
  background-color: white;
  box-shadow: 0px 0px 25px 1px rgba(142, 68, 173, 0.37);
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;
// const ArticleWrapper = styled.div`
//   border-radius: 0.2rem;
//   width: 280px;
//   margin: 1rem;
//   background-color: white;
//   box-shadow: 0px 0px 25px 1px rgba(142, 68, 173, 0.37);
// `;
const ArticleWrapper = styled.div`
  /* width: 100%; */
  display: flex;
`;
const ImgBox = styled.div`
  width: 120px;
  height: 90px;
  /* background-color: green; */
  overflow: hidden;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;
const ArticleImg = styled.img`
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

const ArticleInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  margin: auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const ArticleCat = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: #8e44ad;
  display: flex;
  align-items: center;
`;
const ArticleName = styled.h3`
  color: #8e44ad;
  font-size: 1rem;
  display: block;
  &::first-letter {
    text-transform: capitalize;
  }
`;
const ArticlePrice = styled.p`
  /* font-size: 0.9rem; */
  font-weight: 500;
  @media screen and (min-width: 768px) {
    min-width: 90px;
  }
`;
const ArticleQty = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 500;
`;
const QtyInput = styled.input`
  width: 40px;
  margin-left: 0.5rem;
  text-align: center;
  width: 3rem;
  outline: none;
  &::-webkit-inner-spin-button {
    opacity: 1;
  }
`;
const Total = styled.div`
  font-weight: 500;
  @media screen and (min-width: 768px) {
    min-width: 85px;
  }
`;
// const QtyControls = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const IncreaseQty = styled(AiOutlinePlusCircle)`
//   color: green;
//   margin-right: 0.2rem;
//   cursor: pointer;
// `;
// const DecreaseQty = styled(AiOutlineMinusCircle)`
//   color: red;
//   cursor: pointer;
// `;

const Article = ({ data }) => {
  const [qty, setQty] = useState(1);
  return (
    <ArticleContainer>
      <ArticleWrapper>
        <ArticleInfos>
          <ImgBox>
            <ArticleImg src={data.img}></ArticleImg>
          </ImgBox>
          <ArticleName>{data.name}</ArticleName>
          <ArticlePrice>
            Price: <span>{data.price} $</span>
          </ArticlePrice>
          <ArticleQty>
            Qty:
            <QtyInput
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              max="5"
              placeholder={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </ArticleQty>
          <Total>
            Total: <span>{data.price * qty} $</span>
          </Total>
        </ArticleInfos>
      </ArticleWrapper>
    </ArticleContainer>
  );
};

export default Article;
