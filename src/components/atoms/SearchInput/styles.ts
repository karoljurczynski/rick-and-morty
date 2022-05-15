import styled from "styled-components";
import COLORS from "../../../config/colors/colors";


export const Input = styled.input`
  width: 50%;
  font-size: 14px;
  line-height: 130%;
  color: ${COLORS.PRIMARY_ANTHRACITE_80};
  margin: 11px 12px;

  ::placeholder {
    color: ${COLORS.PRIMARY_ANTHRACITE_50};
  }
`;
export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;
