import { DropdownIcon, Select, Option, Wrapper } from "./styles";
import Dropdown from '../../../images/active_filter.svg';
import { FILTER_TYPE } from "../../../tools/constants";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { setFilterBySpecies, setFilterByStatus } from "../../../redux/reducers/filterReducer";


const FilterInput: React.FC<FilterInputProps> = ({ filterType }) => {
  const dispatch = useDispatch<AppDispatch>();

  const getOptions = () => {
    switch(filterType) {
      case FILTER_TYPE.ORIGIN: 
        return ['Earth (C-137)', 'Earth (Replacement Dimension)'];
      case FILTER_TYPE.SPECIES:
        return ['Human', 'Alien'];
      default:
        return ['Alive', 'Dead', 'unknown'];
    }
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch(filterType) {
      case FILTER_TYPE.SPECIES: {
        dispatch(setFilterBySpecies(e.target.value));
        break;
      }
      case FILTER_TYPE.ORIGIN: {
        break;
      }
      default: {
        dispatch(setFilterByStatus(e.target.value));
        break;
      }
    }
  }
  const [options] = useState<string[]>(getOptions());


  return (
    <Wrapper>
      <Select onChange={handleSelect}>
        <Option value={''} selected disabled hidden>{filterType}</Option>
        {options.map(option => <Option value={option}>{option}</Option>)}
      </Select>
      <DropdownIcon src={Dropdown} alt="Filter icon" />
    </Wrapper>
  );
}


export default FilterInput;