import styled from "styled-components";
import COLORS from "../../../config/colors/colors";
import { TABLE_CELL_SIZE } from "../../../tools/constants";

export const Wrapper = styled.td<TableCellWrapperProps>`
  display: flex;
  width: ${props => props.size};
  height: fit-content;
  margin-right: ${props => props.size === TABLE_CELL_SIZE.SMALL ? '16px' : '32px'};

  ${props => !props.status && `
    flex-direction: column;
    justify-content: center; 
  `}
`;
export const Text = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 8px;
  color: ${COLORS.PRIMARY_ANTHRACITE_100};
`;
export const Title = styled(Text)`
  font-weight: 500;
  margin-bottom: 4px;
`;
export const Subtitle = styled(Text)`
  margin-bottom: 0px;
  color: ${COLORS.PRIMARY_ANTHRACITE_80};
`;
export const Avatar = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  border: 2px dashed ${COLORS.SECONDARY_BLUE_PALE_15};
  border-radius: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export const Icon = styled.img`
  display: flex;
  height: 18px;
  width: 18px;
  margin-right: 8px;
`;
