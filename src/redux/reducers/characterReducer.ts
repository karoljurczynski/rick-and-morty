import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const characterSlice = createSlice({
  name: 'character',
  initialState: [] as Character[],
  reducers: {
    setAllCharacters: (state: Character[], action: PayloadAction<any>) => action.payload,
  },
});


export const { setAllCharacters } = characterSlice.actions;
export default characterSlice.reducer;