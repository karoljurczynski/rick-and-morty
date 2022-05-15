import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changePage } from "../../../redux/reducers/pageReducer";
import { AppDispatch, RootState } from "../../../redux/store";
import PaginationTile from "../../atoms/PaginationTile/PaginationTile";
import { Wrapper } from "./styles";


const Pagination: React.FC = () => {
  const page = useSelector<RootState>(state => state.page) as PageState;
  const dispatch = useDispatch<AppDispatch>();

  const handlePageChange = (newPage: any) => {
    dispatch(changePage(newPage.selected + 1));
  }
  
  return (
    <Wrapper>
      <ReactPaginate
        breakLabel={<PaginationTile ellipsis />}
        nextLabel={<PaginationTile nextButton />}
        onPageChange={handlePageChange}
        pageRangeDisplayed={3}
        pageCount={page.totalPages}
        previousLabel={<PaginationTile prevButton />}
        className="pagination"
        pageClassName="pagination__item"
        activeClassName="pagination__item--active"
      />
    </Wrapper>
  );
}


export default Pagination;