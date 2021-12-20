import React from "react";
import { NavbarContainer, NavItems, NavItem, Cart } from "./NavbarStyles";
import SmallCart from "./SmallCart/SmallCart";

const Navbar = ({ closeMenu }) => {
  return (
    <NavbarContainer>
      <NavItems>
        <NavItem to="/monitors" onClick={() => closeMenu()}>
          Monitors
        </NavItem>
        <NavItem to="/headphones" onClick={() => closeMenu()}>
          Headphones
        </NavItem>
        <NavItem to="/keyboards" onClick={() => closeMenu()}>
          Keyboards
        </NavItem>
        <NavItem to="/cart">
          {/* <Cart /> */}
          <SmallCart />
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
