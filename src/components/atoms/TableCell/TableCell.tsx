import { TABLE_CELL_TYPE } from "../../../tools/constants";
import { Avatar, Icon, Subtitle, Text, Title, Wrapper } from "./styles";

const TableCell: React.FC<TableCellProps> = ({ size, cellFor }) => {

  const getTableCellTemplate = (): JSX.Element => {
    switch(cellFor) {
      case TABLE_CELL_TYPE.NAME: {
        return (
          <Wrapper size={size}>
            <Title>Rick Sanchez</Title>
            <Subtitle>Human</Subtitle>
          </Wrapper>
        )
      }
      case TABLE_CELL_TYPE.AVATAR: {
        return (
          <Wrapper size={size}>
            <Avatar src="" />
          </Wrapper>
        )
      }
      case TABLE_CELL_TYPE.ORIGIN: {
        return (
          <Wrapper size={size}>
            <Text>Earth (C-137)</Text>
            <Subtitle>Planet</Subtitle>
          </Wrapper>
        )
      }
      case TABLE_CELL_TYPE.EPISODES: {
        return (
          <Wrapper size={size}>
            <Text>Rick Potion #9</Text>
            <Text>Something Ricked This Way...</Text>
          </Wrapper>
        )
      }
      default: {
        return (
          <Wrapper size={size} status>
            <Icon src="" />
            <Title>Alive</Title>
          </Wrapper>
        )
      }
    }
  }

  return getTableCellTemplate();
}


export default TableCell;