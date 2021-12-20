import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Content from "../../Components/Content/Content";

const Category = () => {
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  return (
    <>
      <Header />
      <Content location={pathName} />
    </>
  );
};

export default Category;
