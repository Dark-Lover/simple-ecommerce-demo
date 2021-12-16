import React from "react";
import { Container, Row } from "../../GlobalStyles";
import { MenuItems, MenuItem } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Container>
      <Row margin="0" bg="orange">
        <MenuItems>
          <MenuItem>Screens</MenuItem>
          <MenuItem>Monitors</MenuItem>
          <MenuItem>Headphones</MenuItem>
        </MenuItems>
      </Row>
    </Container>
  );
};

export default Navbar;
