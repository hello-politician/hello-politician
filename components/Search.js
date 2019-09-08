import React, { useState } from "react";
import {SearchInput } from 'evergreen-ui'

const Search = ({getSearchResults}) => {
  const [state, setState] = useState("");

  const handleChange = ({ target: { value } }) => {
    setState(value);
  };

  const handleSubmit = e => {
      e.preventDefault()
      getSearchResults(state)
    }

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput
        style={{ fontSize: "32px" }}
        placeholder="Try an MP name or Electorate"
        onChange={handleChange}
        value={state}
        width="100%"
        height="80px"
      />
    </form>
  );
};

export default Search
