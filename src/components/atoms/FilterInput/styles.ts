import styled from "styled-components";
import COLORS from "../../../config/colors/colors";


export const Background = styled.button`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  cursor: pointer;
  background-color: ${COLORS.PRIMARY_WHITE};
  border-radius: 5px;
  border: 1px solid ${COLORS.SECONDARY_BLUE_PALE_40};
`;
export const Text = styled.p`
  font-size: 14px;
  line-height: 130%;
  color: ${COLORS.PRIMARY_ANTHRACITE_80};
  margin: 11px 12px;
`;
export const DropdownIcon = styled.img`
  width: 7.88px;
  height: 4.5px;
  margin-right: 12.5px;
`;
