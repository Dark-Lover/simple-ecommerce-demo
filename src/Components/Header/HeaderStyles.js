import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

export const Logo = styled(Link)`
  background-color: #1f00f0;
  min-height: 2rem;
  min-width: 2rem;
  border-radius: 50%;
`;

export const Hamburger = styled(GiHamburgerMenu)`
  position: absolute;
  right: 30px;
  z-index: 100;
  cursor: pointer;
`;

export const Close = styled(CgClose)`
  position: absolute;
  right: 30px;
  z-index: 100;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const MobileMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
