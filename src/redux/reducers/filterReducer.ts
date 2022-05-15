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
    setFilterBySpecies: (state: FilterState, action: PayloadAction<any>) => ({...state, species: action.payload}),
    setFilterByType: (state: FilterState, action: PayloadAction<any>) => ({...state, type: action.payload}),
    setFilterByGender: (state: FilterState, action: PayloadAction<any>) => ({...state, gender: action.payload}),
  },
});


export const { setFilterByName } = filterSlice.actions;
export default filterSlice.reducer;