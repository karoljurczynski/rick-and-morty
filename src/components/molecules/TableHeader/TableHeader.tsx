import { SORT_TYPE, TABLE_CELL_SIZE } from "../../../tools/constants";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import TableSort from "../../atoms/TableSort/TableSort";
import { Wrapper } from "./styles";

const TableHeader: React.FC = () => {
  return (
    <Wrapper>
      <Checkbox />
      <TableSort size={TABLE_CELL_SIZE.LARGE} sortBy={SORT_TYPE.NAME} sortDirectionHandler={() => {}} />
      <TableSort size={TABLE_CELL_SIZE.NORMAL} sortBy={SORT_TYPE.AVATAR} sortDirectionHandler={() => {}}/>
      <TableSort size={TABLE_CELL_SIZE.NORMAL} sortBy={SORT_TYPE.ORIGIN} sortDirectionHandler={() => {}}/>
      <TableSort size={TABLE_CELL_SIZE.NORMAL} sortBy={SORT_TYPE.EPISODES} sortDirectionHandler={() => {}}/>
      <TableSort size={TABLE_CELL_SIZE.SMALL} sortBy={SORT_TYPE.STATUS} sortDirectionHandler={() => {}}/>
    </Wrapper>
  );
}


export default TableHeader;