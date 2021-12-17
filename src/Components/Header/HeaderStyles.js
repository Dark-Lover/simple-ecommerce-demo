import styled from "styled-components";
import GlobalStyle from "../../GlobalStyles";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

export const HeaderContainer = styled.header`
  background-color: black;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease;
`;
export const Logo = styled(Link)`
  background-color: green;
  height: 3rem;
  width: 3rem;
  border-radius: 30%;
`;

export const Hamburger = styled(GiHamburgerMenu)`
  position: absolute;
  right: 30px;
  z-index: 100;
  cursor: pointer;
  color: white;
`;

export const Close = styled(CgClose)`
  position: absolute;
  right: 30px;
  z-index: 100;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
`;
