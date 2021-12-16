import styled from "styled-components";

export const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  /* width: 12rem; */
  padding: 5rem 1rem;
  gap: 1rem;
  background-color: green;
  width: 70%;

  @media screen and (min-width: 768px) {
    position: relative;
    flex-direction: row;
    height: auto;
    padding: 0;
    justify-content: flex-end;
    width: 100%;
  }
`;
export const MenuItem = styled.li`
  font-size: 0.8rem;
  padding: 0.5rem;
  background-color: orange;
  /* @media screen and (min-width: 768px) {
    position: relative;
    flex-direction: row;
    height: auto;
    padding: 0;
  } */
`;
