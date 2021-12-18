import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  Hamburger,
  Close,
} from "./HeaderStyles";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [toggle, setToggle] = useState(false);
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo to="/">
          My<span>Shop</span>
        </Logo>
        {!isMobile ? (
          <>
            <Search />
            <Navbar />
          </>
        ) : toggle ? (
          <>
            <Close onClick={() => setToggle(!toggle)} />
            <Navbar />
          </>
        ) : (
          <Hamburger onClick={() => setToggle(!toggle)} />
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
