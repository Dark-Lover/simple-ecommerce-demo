import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heading } from "../../GlobalStyles";

const fecthData = async () => {
  try {
    const data = await axios.get("data.json");
    return data;
  } catch (error) {
    console.log(`error catched: ${error.message}, code: ${error.status}`);
  }
};
const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const data = fecthData();
    data
      .then((data) => {
        setProducts(data);
        // console.log(data);
      })
      .catch((err) => console.log("useeffect error: " + err));
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <Heading margin="10px" inverse="red">
      Im home
    </Heading>
  );
};

export default HomePage;
