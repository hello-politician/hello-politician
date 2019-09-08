import React, { useState } from "react";
import { SearchInput } from "evergreen-ui";
import styled from "styled-components";

const StyledSearchInput = styled(SearchInput)`
  font-size: 32px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;

const Search = ({ getSearchResults }) => {
  const [state, setState] = useState("");

  const handleChange = ({ target: { value } }) => {
    setState(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getSearchResults(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledSearchInput
        placeholder="Try an MP name or Electorate"
        onChange={handleChange}
        value={state}
        width="100%"
        height="80px"
      />
    </form>
  );
};

export default Search;
