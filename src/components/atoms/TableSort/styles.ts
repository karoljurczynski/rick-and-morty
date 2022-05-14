import styled from "styled-components";
import { SORT_DIRECTION, TABLE_CELL_SIZE } from "../../../tools/constants";


export const Wrapper = styled.div<TableSortWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.size};
  height: fit-content;
  margin-right: ${props => props.size === TABLE_CELL_SIZE.SMALL ? '16px' : '32px'};
  padding: 12px 0;
`;

export const Icon = styled.img`
  width: 8px;
  height: 4.38px;
  :last-of-type { margin-top: 2.62px };
`;

export const SortDirection = styled.button<SortDirectionProps>`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  cursor: pointer;
  transform: ${props => props.direction === SORT_DIRECTION.ASCENDING ? 'rotate(180deg)' : 'rotate(0deg)'};
  
`;
export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 130%;
`;