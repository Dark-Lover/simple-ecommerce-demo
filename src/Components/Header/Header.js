import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  Hamburger,
  Close,
} from "./HeaderStyles";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [toggle, setToggle] = useState(false);
  const closeMenu = () => {
    setToggle(false);
  };
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo to="/">
          My<span>Shop</span>
        </Logo>
        {!isMobile ? (
          <>
            <Navbar closeMenu={closeMenu} />
          </>
        ) : toggle ? (
          <>
            <Close onClick={() => setToggle(!toggle)} />
            <Navbar closeMenu={closeMenu} />
          </>
        ) : (
          <>
            <Hamburger onClick={() => setToggle(!toggle)} />
          </>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
