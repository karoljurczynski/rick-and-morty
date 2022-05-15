import styled from "styled-components";
import COLORS from "../../../config/colors/colors";


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 43px;
  justify-content: flex-end;
  gap: 4px;
  margin-bottom: 54px;

  .pagination {
    display: flex;
    align-items: center;
    margin-top: 43px;
    justify-content: flex-end;
    gap: 4px;
    margin-bottom: 54px;
    list-style-type: none;

    &__item {
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
      background-color: ${COLORS.PRIMARY_WHITE};
      
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }

      &--active {
        background-color: ${COLORS.SECONDARY_BLUE_PALE_10}
      }

      :hover { background-color: ${COLORS.SECONDARY_BLUE_PALE_10} }
    }
  }
`;