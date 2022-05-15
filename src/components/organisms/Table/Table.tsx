import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAllCharacters } from "../../../redux/reducers/characterReducer";
import { setTotalPages } from "../../../redux/reducers/pageReducer";
import { AppDispatch, RootState } from "../../../redux/store";
import TableHeader from "../../molecules/TableHeader/TableHeader";
import TableRow from "../../molecules/TableRow/TableRow";
import { Wrapper } from "./styles";


const Table: React.FC = () => {
  const state = useSelector<RootState>(state => state) as RootState;
  const characters: Character[] = state.character;
  const page: PageState = state.page;
  const filter: FilterState = state.filter;
  const dispatch = useDispatch<AppDispatch>();

  const getCharacters = async () => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page.activePage}${filter.name !== null ? `&name=${filter.name}` : ''}${filter.status !== null  ? `&status=${filter.status}` : ''}${filter.species !== null ? `&species=${filter.species}` : ''}${filter.type !== null    ? `&type=${filter.type}` : ''}${filter.gender !== null  ? `&gender=${filter.gender}` : ''}`;
      
    fetch(url)
      .then(res => res && res.ok ? res.json() : dispatch(setAllCharacters([])))
      .then(res => { 
        dispatch(setAllCharacters(res.results));
        dispatch(setTotalPages(res.info.pages))
        
      });    
  }

  useEffect(() => { getCharacters() }, [filter, page.activePage]);

  return (
    <Wrapper>
      <TableHeader />
      {characters.map(character => <TableRow character={character} />)}
    </Wrapper>
  );
}


export default Table;