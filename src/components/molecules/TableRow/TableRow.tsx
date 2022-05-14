import { TABLE_CELL_TYPE, TABLE_CELL_SIZE } from "../../../tools/constants";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import TableCell from "../../atoms/TableCell/TableCell";
import { Wrapper } from "./styles";

const TableRow: React.FC = () => {
  return (
    <Wrapper>
      <Checkbox />
      <TableCell size={TABLE_CELL_SIZE.LARGE} cellFor={TABLE_CELL_TYPE.NAME} />
      <TableCell size={TABLE_CELL_SIZE.NORMAL} cellFor={TABLE_CELL_TYPE.AVATAR} />
      <TableCell size={TABLE_CELL_SIZE.NORMAL} cellFor={TABLE_CELL_TYPE.ORIGIN} />
      <TableCell size={TABLE_CELL_SIZE.NORMAL} cellFor={TABLE_CELL_TYPE.EPISODES} />
      <TableCell size={TABLE_CELL_SIZE.SMALL} cellFor={TABLE_CELL_TYPE.STATUS} />
    </Wrapper>
  );
}


export default TableRow;