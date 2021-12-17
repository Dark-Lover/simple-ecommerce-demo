import React, { useState } from "react";
import { HeaderContainer, Logo, Hamburger, Close } from "./HeaderStyles";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <HeaderContainer>
      <Logo to="/" />
      {/* <Search /> */}
      <Navbar show={toggle} />
      {toggle ? (
        <>
          <Close onClick={() => setToggle(!toggle)} />
        </>
      ) : (
        <Hamburger onClick={() => setToggle(!toggle)} />
      )}
    </HeaderContainer>
  );
};

export default Header;
