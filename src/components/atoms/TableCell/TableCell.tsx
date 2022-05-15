import { STATUS_ICONS, TABLE_CELL_TYPE } from "../../../tools/constants";
import { Avatar, Icon, Subtitle, Text, Title, Wrapper } from "./styles";

const TableCell: React.FC<TableCellProps> = ({ size, cellFor, data }) => {
  const { character, location, episodes } = data;

  const getTableCellTemplate = (): JSX.Element => {
    switch(cellFor) {
      case TABLE_CELL_TYPE.NAME: {
        return (
          <Wrapper size={size}>
            <Title>{ character && character.name }</Title>
            <Subtitle>{ character && character.species }</Subtitle>
          </Wrapper>
        )
      }
      case TABLE_CELL_TYPE.AVATAR: {
        return (
          <Wrapper size={ size }>
            <Avatar src={ character && character.image } />
          </Wrapper>
        )
      }
      case TABLE_CELL_TYPE.ORIGIN: {
        return (
          <Wrapper size={size}>
            <Text>{ location ? location.name : 'unknown' }</Text>
            <Subtitle>{ location ? location.type : null }</Subtitle>
          </Wrapper>
        )
      }
      case TABLE_CELL_TYPE.EPISODES: {
        return (
          <Wrapper size={size}>
            { episodes && episodes.map(episode => <Text>{episode.name}</Text>) }
          </Wrapper>
        )
      }
      default: {
        return (
          <Wrapper size={size} status>
            <Icon src={character && STATUS_ICONS[character.status]} />
            <Title>{ character && character.status }</Title>
          </Wrapper>
        )
      }
    }
  }

  return getTableCellTemplate();
}


export default TableCell;