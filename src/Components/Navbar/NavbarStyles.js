import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const NavbarContainer = styled.nav`
  height: 100%;
  /* width: 100%; */
  @media screen and (min-width: 768px) {
    width: auto;
  }
`;
export const NavItems = styled.ul`
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;
  height: 100vh;
  list-style: none;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
  padding: 4rem 1rem;
  @media screen and (min-width: 768px) {
    position: relative;
    flex-direction: row;
    height: auto;
    padding: unset;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }
`;
export const NavItem = styled.li`
  padding: 1rem 1.5rem;
  color: #8e44ad;
  font-weight: 500;
  letter-spacing: 0.03rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: #8e44ad;
    color: white;
  }
  &:last-child {
    text-align: center;
    background-color: #8e44ad;
    color: white;

    &:hover {
      background-color: white;
      color: #8e44ad;
    }
    @media screen and (min-width: 768px) {
    }
  }
`;

export const Cart = styled(FaShoppingCart)`
  font-size: 1.5rem;
`;
