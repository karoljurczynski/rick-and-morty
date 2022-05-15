interface TableCellData {
  character: Character;
  location: any;
  episodes: Episode[];
}

interface TableCellProps {
  size: string;
  cellFor: string;
  data: TableCellData;
}
interface TableCellWrapperProps {
  size: string;
  status?: boolean;
}