import React, { useState } from "react";
import { Container, Row } from "../../GlobalStyles";
import { Logo, Hamburger, Close, MobileMenu } from "./HeaderStyles";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container padding="0.5rem 0rem" bg>
      <Row align="center" justify="space-between" color="#fff" padding="0">
        <Logo to="/cart" />
        <Search />
        <Navbar />
        <MobileMenu>
          {toggle ? (
            <>
              <Close onClick={() => setToggle(!toggle)} />
            </>
          ) : (
            <Hamburger onClick={() => setToggle(!toggle)} />
          )}
        </MobileMenu>
      </Row>
    </Container>
  );
};

export default Header;
