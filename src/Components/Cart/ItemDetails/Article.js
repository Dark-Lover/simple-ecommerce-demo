import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
const ArticleContainer = styled.div`
  border-radius: 0.2rem;
  width: 100%;
  margin: 1rem 2rem;
  background-color: white;
  box-shadow: 0px 0px 25px 1px rgba(142, 68, 173, 0.37);
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
  width: 50%;
  height: 200px;
  background-color: green;
  overflow: hidden;
  cursor: pointer;
  position: relative;
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
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: orange;
  padding: 0.5rem;
`;
const ArticleCat = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: #8e44ad;
  display: flex;
  align-items: center;
`;
const ArticleName = styled.h3``;
const ArticleDesc = styled.p``;
const ArticleQty = styled.div``;
const QtyInput = styled.input`
  width: 20px;
`;
const QtyControls = styled.div``;
const IncreaseQty = styled(AiOutlinePlusCircle)``;
const DecreaseQty = styled(AiOutlineMinusCircle)``;

const Article = () => {
  return (
    <ArticleContainer>
      <ArticleWrapper>
        <ImgBox>
          <ArticleImg />
        </ImgBox>
        <ArticleInfos>
          <ArticleCat>
            <IoIosArrowForward />
            Heading
          </ArticleCat>
          <ArticleName>Apple Headephone</ArticleName>
          <ArticleDesc>
            its here for you, we are going to impress you.
          </ArticleDesc>
          <ArticleQty>
            <QtyInput />
            <QtyControls>
              <IncreaseQty />
              <DecreaseQty />
            </QtyControls>
          </ArticleQty>
        </ArticleInfos>
      </ArticleWrapper>
    </ArticleContainer>
  );
};

export default Article;
