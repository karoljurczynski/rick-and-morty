import styled from "styled-components";
import COLORS from "../../../config/colors/colors";


export const Wrapper = styled.button`
  width: 140px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  
  background-color: ${COLORS.PRIMARY_WHITE};
  border-radius: 5px;
  border: 1px solid ${COLORS.SECONDARY_BLUE_PALE_40};
`;
export const Select = styled.select`
  position: relative;
  font-size: 14px;
  line-height: 130%;
  color: ${COLORS.PRIMARY_ANTHRACITE_80};
  margin: 11px 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  cursor: pointer;
  
`;
export const Option = styled.option`
  position: absolute;
  top: -200%;
  font-size: 14px;
  line-height: 130%;
  color: ${COLORS.PRIMARY_ANTHRACITE_80};
  margin: 11px 12px;
  width: 100%;
  cursor: pointer;

  
`;
export const DropdownIcon = styled.img`
  position: absolute;
  right: 12.5px;
  width: 7.88px;
  height: 4.5px;
`;
