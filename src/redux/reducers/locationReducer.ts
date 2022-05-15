import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const locationSlice = createSlice({
  name: 'location',
  initialState: [] as Location[],
  reducers: {
    setAllLocations: (state: Location[], action: PayloadAction<any>) => action.payload,
  },
});


export const { setAllLocations } = locationSlice.actions;
export default locationSlice.reducer;