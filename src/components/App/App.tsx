import { BUTTON_TYPE, FILTER_TYPE } from "../../tools/constants";
import Button from "../atoms/Button/Button";
import FilterInput from "../atoms/FilterInput/FilterInput";
import Heading from "../atoms/Heading/Heading";
import SearchInput from "../atoms/SearchInput/SearchInput";
import TableHeader from "../molecules/TableHeader/TableHeader";
import { Wrapper } from "./styles";

const App: React.FC = () => {
  const handleSearch = () => {

  }
  const handleButton = () => {

  }
  return (
    <Wrapper>
      <Heading>Characters</Heading>
      <SearchInput inputHandler={handleSearch} />
      <FilterInput filterType={FILTER_TYPE.SPECIES}/>
      <FilterInput filterType={FILTER_TYPE.ORIGIN}/>
      <FilterInput filterType={FILTER_TYPE.STATUS}/>
      <Button buttonType={BUTTON_TYPE.CHANGE} buttonHandler={handleButton} />
      <Button buttonType={BUTTON_TYPE.REMOVE} buttonHandler={handleButton} />
      <TableHeader />
    </Wrapper>
  )
}


export default App;