import Checkmark from '../images/checkmark.svg';
import ExclamationMark from '../images/exclamation_mark.svg';
import QuestionMark from '../images/question_mark.svg';


export const FILTER_TYPE = {
  SEARCH:  'Search',
  SPECIES: 'Species',
  ORIGIN:  'Origin',
  STATUS:  'Status'
}

export const BUTTON_TYPE = {
  CHANGE: 'Change status',
  REMOVE: 'Remove characters'
}

export const TABLE_CELL_TYPE = {
  NAME:     'Name',
  AVATAR:   'Avatar',
  ORIGIN:   'Origin',
  EPISODES: 'Episodes',
  STATUS:   'Status'
}

export const TABLE_CELL_SIZE = {
  SMALL:  '13.9534884%',
  NORMAL: '15.503876%',
  LARGE:  '21.4470284%'
}

export const SORT_DIRECTION = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending'
}

export const STATUS_ICONS = {
  'Alive': Checkmark,
  'Dead': ExclamationMark,
  'unknown': QuestionMark
}

export const SPECIES_TYPES = {
  HUMAN: 'human',
  ALIEN: 'alien'
}

export const ORIGIN_TYPES = {
  
}

export const STATUS_TYPES = {
  ALIVE: 'alive',
  DEAD: 'dead',
  UNKNOWN: 'unknown'
}