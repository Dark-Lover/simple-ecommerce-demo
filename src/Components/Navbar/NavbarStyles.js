import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  position: relative;
  z-index: 22;
  @media screen and (min-width: 768px) {
  }
`;
export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #8e44ad;
  width: 60%;
  height: 100vh;
  padding: 4rem 1rem;
  transition: all 0.25s ease-in-out;
  align-items: center;

  @media screen and (min-width: 768px) {
    position: relative;
    flex-flow: row;
    height: auto;
    padding: unset;
    background-color: transparent;
  }
`;
export const NavItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 1rem 2rem;
  color: white;
  font-weight: 500;
  transition: all 0.25s ease;
  &:hover {
    background-color: white;
    color: #8e44ad;
  }
  &:last-child {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    width: 30%;
    margin: 1rem auto;
    color: white;
    padding: 0.5rem 1rem;
    &:hover {
      color: #8e44ad;
    }
    @media screen and (min-width: 768px) {
      padding: 1rem 2rem;
      margin: 0;
      border: none;
      color: #8e44ad;
    }
  }
  @media screen and (min-width: 768px) {
    color: #8e44ad;
  }
`;

export const Cart = styled(FaShoppingCart)`
  /* background-color: transparent;
  transition: all 0.25s ease;
  font-size: 1.2rem; */
`;
