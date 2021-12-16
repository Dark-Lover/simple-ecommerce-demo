import React from "react";
import { Container, Row } from "../../GlobalStyles";
import { Input } from "./SearchStyles";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <Container>
      <Row justify="center">
        <Input />
        <FaSearch />
      </Row>
    </Container>
  );
};

export default Search;
