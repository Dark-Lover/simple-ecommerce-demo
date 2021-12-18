import styled from "styled-components";
import GlobalStyle from "../../GlobalStyles";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

export const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid #8e44ad;
  background-color: #eee;
`;

export const HeaderWrapper = styled.div`
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease;
  position: relative;
  max-width: 1280px;
  margin: auto;
  min-height: 56px;
`;

export const Logo = styled(Link)`
  color: #8e44ad;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.04rem;
  span {
    font-weight: 600;
    font-size: 1rem;
  }
`;

export const Hamburger = styled(GiHamburgerMenu)`
  position: absolute;
  right: 30px;
  z-index: 100;
  cursor: pointer;
  color: #8e44ad;
`;

export const Close = styled(CgClose)`
  position: absolute;
  right: 30px;
  z-index: 100;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
`;
