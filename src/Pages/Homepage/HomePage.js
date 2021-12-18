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
  const [isFetched, setIsFetched] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = fecthData();
    data
      .then((data) => {
        dispatch(fetchProducts(data.products));
        setIsFetched(true);
      })
      .catch((err) => console.log("useeffect error: " + err));
  }, []);
  return (
    <>
      <Header />
      {isFetched && <Content />}
    </>
  );
};

export default HomePage;
