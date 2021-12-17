import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: green;
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
  background-color: blue;
  width: 60%;
  height: 100vh;
  list-style: none;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
  padding: 4rem 2rem;
  @media screen and (min-width: 768px) {
    position: relative;
    flex-direction: row;
    height: auto;
    padding: unset;
    width: 100%;
    justify-content: flex-end;
  }
`;
export const NavItem = styled.li`
  padding: 1rem 3rem;
  color: white;
  background-color: violet;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
  &:last-child {
    border-radius: 5px;
    width: 40%;
    margin: 1rem auto;
    padding: 0.5rem 2rem;
    text-align: center;
    @media screen and (min-width: 768px) {
      margin: 0 1rem;
      padding: 1rem 1.5rem;
    }
  }
`;
