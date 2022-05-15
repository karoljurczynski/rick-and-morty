import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const episodeSlice = createSlice({
  name: 'episode',
  initialState: [] as Episode[],
  reducers: {
    setAllEpisodes: (state: Episode[], action: PayloadAction<any>) => action.payload,
  },
});


export const { setAllEpisodes } = episodeSlice.actions;
export default episodeSlice.reducer;