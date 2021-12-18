import React from "react";
import { NavbarContainer, NavItems, NavItem, Cart } from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavItems>
        <NavItem>Monitors</NavItem>
        <NavItem>Headphones</NavItem>
        <NavItem>Keyboards</NavItem>
        <NavItem>
          <Cart />
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
