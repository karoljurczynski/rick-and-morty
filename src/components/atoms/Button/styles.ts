import styled from "styled-components";
import COLORS from "../../../config/colors/colors";
import { BUTTON_TYPE } from "../../../tools/constants";


export const Wrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${props => props.buttonType === BUTTON_TYPE.CHANGE ? '171px' : '156px'};
  height: fit-content;
  background-color: ${props => props.buttonType === BUTTON_TYPE.CHANGE ? COLORS.PRIMARY_BLUE : COLORS.BUTTON_RED};
  border: 1px solid ${COLORS.BUTTON_BORDER};
  border-radius: 5px;
`; 
export const Text = styled.p`
  color: ${COLORS.PRIMARY_WHITE};
  font-size: 14px;
  text-overflow: none;
  line-height: 130%;
  font-weight: 500;
  margin: 11px 0 11px 10px;
`;
export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 10px;
`;