import { Icon, PageNumber, Wrapper } from "./styles";
import PrevPageIcon from '../../../images/previous_page.svg';
import NextPageIcon from '../../../images/next_page.svg';


const PaginationTile: React.FC<PaginationTileProps> = ({ pageNumber, prevButton, nextButton, ellipsis, active }) => {
  return (
    <Wrapper ellipsis={ellipsis ? true : false} active={active ? true : false}>
      { prevButton && <Icon src={PrevPageIcon} />}
      { nextButton && <Icon src={NextPageIcon} />}
      { ellipsis && <PageNumber>...</PageNumber>}
      { pageNumber && <PageNumber>{ pageNumber }</PageNumber>}
    </Wrapper>
  );
}


export default PaginationTile;