import { DropdownIcon, Text, Wrapper } from "./styles";
import Dropdown from '../../../images/active_filter.svg';


const FilterInput: React.FC<FilterInputProps> = ({ filterType }) => {
  return (
    <Wrapper>
      <Text>{ filterType }</Text>
      <DropdownIcon src={Dropdown} alt="Filter icon" />
    </Wrapper>
  );
}


export default FilterInput;