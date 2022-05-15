import { SearchIcon, Input } from "./styles";
import { Wrapper } from "../FilterInput/styles";
import Search from '../../../images/search.svg';
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { setFilterByName } from "../../../redux/reducers/filterReducer";


const SearchInput: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch(setFilterByName(e.target.value));

  }

  return (
    <Wrapper>
      <Input type="text" placeholder="Search" onChange={handleSearch} />
      <SearchIcon src={Search} alt="Search icon" />
    </Wrapper>
  );
}


export default SearchInput;