import styled from "styled-components";
import COLORS from "../../../config/colors/colors";
import { Wrapper as Checkbox } from '../../atoms/Checkbox/styles';


export const Wrapper = styled.tr`
  display: flex;
  align-items: center;
  height: 83px;
  background-color: ${COLORS.PRIMARY_WHITE};
  border-top: 1px solid ${COLORS.SECONDARY_BLUE_PALE_30};
  
  ${Checkbox} {
    margin-top: 24px;
    align-self: flex-start;
  }
`;