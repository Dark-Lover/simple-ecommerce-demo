import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Header from "../../Components/Header/Header";
import Content from "../../Components/Content/Content";
import { fetchProducts } from "../../Redux";

const fecthData = async () => {
  try {
    const { data } = await axios.get("data.json");
    return data;
  } catch (error) {
    console.log(`error catched: ${error.message}, code: ${error.status}`);
  }
};
const HomePage = () => {
  const myData = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(myData);
    //check redux state before fetching to avoid multiple fetching after moving from link to other
    if (myData.length === 0) {
      const data = fecthData();
      data
        .then((data) => {
          dispatch(fetchProducts(data.products));
        })
        .catch((err) => console.log("useeffect error: " + err));
    }
  }, []);
  return (
    <>
      <Header />
      {myData && <Content />}
    </>
  );
};

export default HomePage;
