import { SearchIcon, Input } from "./styles";
import { Background } from "../FilterInput/styles";
import Search from '../../../images/search.svg';


const SearchInput: React.FC<SearchInputProps> = ({ inputHandler }) => {
  return (
    <Background>
      <Input type="text" placeholder="Search" onChange={inputHandler} />
      <SearchIcon src={Search} alt="Search icon" />
    </Background>
  );
}


export default SearchInput;