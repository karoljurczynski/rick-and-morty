import { SearchIcon, Input } from "./styles";
import { Wrapper } from "../FilterInput/styles";
import Search from '../../../images/search.svg';


const SearchInput: React.FC<SearchInputProps> = ({ inputHandler }) => {
  return (
    <Wrapper>
      <Input type="text" placeholder="Search" onChange={inputHandler} />
      <SearchIcon src={Search} alt="Search icon" />
    </Wrapper>
  );
}


export default SearchInput;