import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAllCharacters } from "../../../redux/reducers/characterReducer";
import { setAllEpisodes } from "../../../redux/reducers/episodeReducer";
import { setAllLocations } from "../../../redux/reducers/locationReducer";
import { AppDispatch, RootState } from "../../../redux/store";
import TableHeader from "../../molecules/TableHeader/TableHeader";
import TableRow from "../../molecules/TableRow/TableRow";
import { Wrapper } from "./styles";


const Table: React.FC = () => {
  const characters = useSelector<RootState>(state => state.character) as Character[];
  const page = useSelector<RootState>(state => state.page) as PageState;
  const dispatch = useDispatch<AppDispatch>();


  const getCharacters = async () => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page.activePage}`;
    fetch(url)
      .then(res => res && res.ok ? res.json() : new Error('error'))
      .then(res => { dispatch(setAllCharacters(res.results)) });    
  }
  const getLocations = async () => {
    const url = 'https://rickandmortyapi.com/api/location';
    fetch(url)
      .then(res => res && res.ok ? res.json() : new Error('error'))
      .then(res => { dispatch(setAllLocations(res.results)) });    
  }
  const getEpisodes = async () => {
    const url = 'https://rickandmortyapi.com/api/episode';
    fetch(url)
      .then(res => res && res.ok ? res.json() : new Error('error'))
      .then(res => { dispatch(setAllEpisodes(res.results)) }); 
  }


  useEffect(() => {
    getCharacters();
    getLocations();
    getEpisodes();

  }, []);

  return (
    <Wrapper>
      <TableHeader />
      {characters.map(character => <TableRow character={character} />)}
    </Wrapper>
  );
}


export default Table;