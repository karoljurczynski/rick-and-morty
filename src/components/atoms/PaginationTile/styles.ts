import styled from "styled-components";
import COLORS from "../../../config/colors/colors";


export const Wrapper = styled.button<PaginationTileWrapperProps>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${COLORS.SECONDARY_BLUE_PALE_40};
  box-shadow: 0px 2px 4px #DDE3EC;
  user-select: none;

  :hover { background-color: ${COLORS.SECONDARY_BLUE_PALE_10} }
  ${props => props.active ? `background-color: ${COLORS.SECONDARY_BLUE_PALE_10}` : `background-color: ${COLORS.PRIMARY_WHITE}`};
  ${props => props.ellipsis && `
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: default;
    pointer-events: none;
  `}
`;

export const PageNumber = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 130%;
  color: ${COLORS.PRIMARY_ANTHRACITE_80};
`;
export const Icon = styled.img`
  display: flex;
  width: auto;
  height: 11px;
`;