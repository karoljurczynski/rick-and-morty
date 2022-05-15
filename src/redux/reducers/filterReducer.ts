import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    name: null,
    status: null,
    species: null,
    type: null,
    gender: null
  } as FilterState,

  reducers: {
    setFilterByName: (state: FilterState, action: PayloadAction<any>) => ({...state, name: action.payload}),
    setFilterByStatus: (state: FilterState, action: PayloadAction<any>) => ({...state, status: action.payload}),
    setFilterBySpecies: (state: FilterState, action: PayloadAction<any>) => ({...state, species: action.payload})
  },
});


export const { setFilterByName, setFilterByStatus, setFilterBySpecies } = filterSlice.actions;
export default filterSlice.reducer;