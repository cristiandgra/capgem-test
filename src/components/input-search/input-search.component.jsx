import React from "react";
import SearchIcon from "../../assets/search-icon.png";
import { SearchInputContainer, InputBar } from "./input-search.styles";

export const SearchInput = ({ onChange }) => {
  return (
    <SearchInputContainer>
      <InputBar
        type="text"
        placeholder="Search with brand or model..."
        onChange={(e) => onChange(e.target.value)}
      />
      <span>
        <img src={SearchIcon} alt="search-bar" width={24} height={24} />
      </span>
    </SearchInputContainer>
  );
};

export default SearchInput;
