import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    activePage: 1,
    totalPages: 5,
  } as PageState,
  reducers: {
    changePage: (state: PageState, action: PayloadAction<any>) => { state.activePage = action.payload },
    setTotalPages: (state: PageState, action: PayloadAction<number>) => { state.totalPages = action.payload },
  },
});


export const { changePage, setTotalPages } = pageSlice.actions;
export default pageSlice.reducer;