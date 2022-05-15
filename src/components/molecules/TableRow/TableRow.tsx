import { useEffect, useState } from "react";
import { TABLE_CELL_TYPE, TABLE_CELL_SIZE } from "../../../tools/constants";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import TableCell from "../../atoms/TableCell/TableCell";
import { Wrapper } from "./styles";


const TableRow: React.FC<TableRowProps> = ({ character }) => {
  const [location, setLocation] = useState();
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const data: TableCellData = {
    character: character,
    location: location,
    episodes: episodes
  }

  useEffect(() => {
    getCharacterLocation();
    getCharacterEpisodes();
    console.log(episodes);
  }, []);

  const getCharacterLocation = async () => {
    const url = character.origin.url;
    fetch(url)
      .then(res => res && res.ok ? res.json() : new Error('error'))
      .then(res => { setLocation(res) });
  }
  const getRandomArrayItem = (array: any[]) => array[Math.floor(Math.random() * array.length)];
  const getTwoRandomEpisodes = (episodesArray: string[]): string[] => {
    const firstEpisode = getRandomArrayItem(episodesArray);
    let secondEpisode = getRandomArrayItem(episodesArray);

    while (secondEpisode === firstEpisode)
      secondEpisode = getRandomArrayItem(episodesArray);

    return [firstEpisode, secondEpisode];
  }
  const getCharacterEpisodes = async () => {
    let selectedEpisodes: string[] = [];
    
    if (character.episode.length > 2)
      selectedEpisodes = getTwoRandomEpisodes(character.episode);
    else
      selectedEpisodes = character.episode;
    for (const episode of selectedEpisodes) {
      fetch(episode)
        .then(res => res && res.ok ? res.json() : new Error('error'))
        .then(res => { setEpisodes([...episodes, res]) });
    }
  }
  return (
    <Wrapper>
      <Checkbox />
      <TableCell size={TABLE_CELL_SIZE.LARGE}  cellFor={TABLE_CELL_TYPE.NAME}     data={data} />
      <TableCell size={TABLE_CELL_SIZE.NORMAL} cellFor={TABLE_CELL_TYPE.AVATAR}   data={data} />
      <TableCell size={TABLE_CELL_SIZE.NORMAL} cellFor={TABLE_CELL_TYPE.ORIGIN}   data={data} />
      <TableCell size={TABLE_CELL_SIZE.NORMAL} cellFor={TABLE_CELL_TYPE.EPISODES} data={data} />
      <TableCell size={TABLE_CELL_SIZE.SMALL}  cellFor={TABLE_CELL_TYPE.STATUS}   data={data} />
    </Wrapper>
  );
}


export default TableRow;