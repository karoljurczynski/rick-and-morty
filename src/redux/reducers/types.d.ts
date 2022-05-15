interface PageState {
  activePage: number;
  totalPages: number;
  pageSize: number;
}
interface FilterState {
  name: null | string;
  status: null | string;
  species:  null | string;
  type: null | string;
  gender: null | string;
}