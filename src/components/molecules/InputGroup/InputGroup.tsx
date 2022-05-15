import { FILTER_TYPE } from "../../../tools/constants";
import FilterInput from "../../atoms/FilterInput/FilterInput";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import { Wrapper } from "./styles";


const InputGroup: React.FC = () => {
  return (
    <Wrapper>
      <SearchInput />
      <FilterInput filterType={FILTER_TYPE.SPECIES}/>
      <FilterInput filterType={FILTER_TYPE.ORIGIN}/>
      <FilterInput filterType={FILTER_TYPE.STATUS}/>
    </Wrapper>
  );
}


export default InputGroup;