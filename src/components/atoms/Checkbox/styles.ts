import styled from "styled-components";
import COLORS from "../../../config/colors/colors";


export const Wrapper = styled.div`
  display: flex;
  margin: 0 24px;
`;

export const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
  background-color: ${COLORS.PRIMARY_WHITE};
  border: 1px solid ${COLORS.SECONDARY_BLUE_PALE_40};
  cursor: pointer;
`;