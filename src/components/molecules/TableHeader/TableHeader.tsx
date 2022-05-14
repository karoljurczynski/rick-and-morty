import { TABLE_CELL_TYPE, TABLE_CELL_SIZE } from "../../../tools/constants";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import TableSort from "../../atoms/TableSort/TableSort";
import { Wrapper } from "./styles";

const TableHeader: React.FC = () => {
  return (
    <Wrapper>
      <Checkbox />
      <TableSort size={TABLE_CELL_SIZE.LARGE} sortBy={TABLE_CELL_TYPE.NAME} sortDirectionHandler={() => {}} />
      <TableSort size={TABLE_CELL_SIZE.NORMAL} sortBy={TABLE_CELL_TYPE.AVATAR} sortDirectionHandler={() => {}}/>
      <TableSort size={TABLE_CELL_SIZE.NORMAL} sortBy={TABLE_CELL_TYPE.ORIGIN} sortDirectionHandler={() => {}}/>
      <TableSort size={TABLE_CELL_SIZE.NORMAL} sortBy={TABLE_CELL_TYPE.EPISODES} sortDirectionHandler={() => {}}/>
      <TableSort size={TABLE_CELL_SIZE.SMALL} sortBy={TABLE_CELL_TYPE.STATUS} sortDirectionHandler={() => {}}/>
    </Wrapper>
  );
}


export default TableHeader;