import { Background, DropdownIcon, Text } from "./styles";
import Dropdown from '../../../images/active_filter.svg';


const FilterInput: React.FC<FilterInputProps> = ({ filterType }) => {
  return (
    <Background>
      <Text>{ filterType }</Text>
      <DropdownIcon src={Dropdown} alt="Filter icon" />
    </Background>
  );
}


export default FilterInput;