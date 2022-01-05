import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeFromCart } from "../../../Redux";
import {
  ArticleContainer,
  ArticleWrapper,
  ArticleInfos,
  ImgBox,
  ArticleImg,
  ArticleName,
  ArticlePrice,
  ArticleDesc,
  RemoveItem,
} from "./ArticleStyles";

const Article = ({ data }) => {
  const dispatch = useDispatch();
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
          <ArticleDesc>
            <span>{data.desc} </span>
          </ArticleDesc>
          <RemoveItem onClick={() => dispatch(removeFromCart(data))}>
            <MdDeleteForever />
          </RemoveItem>
          {/* <ArticleQty>
            Qty:
            <QtyInput
              id="quantity"
              name="quantity"
              type="number"
              value={qty}
              min="1"
              max="5"
              onChange={(e) => setQty(e.target.value)}
            />
          </ArticleQty> */}
          {/* <Total>
            Total: <span>{data.price} $</span>
          </Total> */}
        </ArticleInfos>
      </ArticleWrapper>
    </ArticleContainer>
  );
};

export default Article;
