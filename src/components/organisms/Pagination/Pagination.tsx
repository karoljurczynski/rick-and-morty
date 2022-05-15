
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import PaginationTile from "../../atoms/PaginationTile/PaginationTile";
import { Wrapper } from "./styles";


const Pagination: React.FC = () => {
  const page = useSelector<RootState>(state => state.page);
  return (
    <Wrapper>
      <PaginationTile prevButton />
      <PaginationTile pageNumber={1} active />
      <PaginationTile pageNumber={2}/>
      <PaginationTile pageNumber={3}/>
      <PaginationTile ellipsis />
      <PaginationTile pageNumber={23}/>
      <PaginationTile pageNumber={24} />
      <PaginationTile pageNumber={25}/>
      <PaginationTile nextButton />
    </Wrapper>
  );
}


export default Pagination;