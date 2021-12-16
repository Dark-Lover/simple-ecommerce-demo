import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heading } from "../../GlobalStyles";
import Header from "../../Components/Header/Header";

const fecthData = async () => {
  try {
    const { data } = await axios.get("data.json");
    return data;
  } catch (error) {
    console.log(`error catched: ${error.message}, code: ${error.status}`);
  }
};
const HomePage = () => {
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const data = fecthData();
  //   data
  //     .then((data) => {
  //       setProducts(data.products);
  //     })
  //     .catch((err) => console.log("useeffect error: " + err));
  // }, []);
  // useEffect(() => {
  //   console.log(products);
  // }, [products]);
  return (
    // <Heading margin="10px" inverse="red">
    //   {products !== [] ? (
    //     products.map((el) => <p key={el.id}>{el.name}</p>)
    //   ) : (
    //     <p>Loading</p>
    //   )}
    // </Heading>
    <>
      <Header />
    </>
  );
};

export default HomePage;
