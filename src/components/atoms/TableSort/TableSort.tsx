import { Icon, SortDirection, Text, Wrapper } from "./styles";
import TopIcon from '../../../images/unactive_filter.svg';
import BottomIcon from '../../../images/active_filter.svg';
import { SORT_DIRECTION } from "../../../tools/constants";

const TableSort: React.FC<TableSortProps> = ({ size, sortBy, sortDirectionHandler }) => {
  return (
    <Wrapper size={size}>
      <Text>{ sortBy }</Text>
      <SortDirection onClick={sortDirectionHandler} direction={SORT_DIRECTION.ASCENDING}>
        <Icon src={TopIcon} />
        <Icon src={BottomIcon} />
      </SortDirection>
    </Wrapper>
  );
}


export default TableSort;