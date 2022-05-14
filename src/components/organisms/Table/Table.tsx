import TableHeader from "../../molecules/TableHeader/TableHeader";
import TableRow from "../../molecules/TableRow/TableRow";
import { Wrapper } from "./styles";


const Table: React.FC = () => {
  return (
    <Wrapper>
      <TableHeader />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </Wrapper>
  );
}


export default Table;