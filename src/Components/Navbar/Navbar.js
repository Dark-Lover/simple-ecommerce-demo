import React from "react";
import { NavbarContainer, NavItems, NavItem, Cart } from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavItems>
        <NavItem to="/monitors">Monitors</NavItem>
        <NavItem to="/headphones">Headphones</NavItem>
        <NavItem to="/keyboards">Keyboards</NavItem>
        <NavItem to="/cart">
          <Cart />
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
